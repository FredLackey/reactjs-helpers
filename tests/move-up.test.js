import { describe, expect, it } from '@jest/globals';
import { moveUp } from '../';

describe('moveUp function', () => {
  // Test case 1: Move an item up within the array
  it('moves an item up within the array', () => {
    const array = ['A', 'B', 'C', 'D'];
    const item = 'C';

    const newArray = moveUp(array, item);

    // Check if the item was moved up correctly
    expect(newArray).toEqual(['A', 'C', 'B', 'D']);
  });

  // Test case 2: Array is not valid
  it('returns the original array when the array is not valid', () => {
    const array = null; // Invalid array
    const item = 'B';

    const newArray = moveUp(array, item);

    // Expect the original array to be returned
    expect(newArray).toBe(array);
  });

  // Test case 3: Array has less than 2 elements
  it('returns the original array when the array has less than 2 elements', () => {
    const array = ['A']; // Array with less than 2 elements
    const item = 'A';

    const newArray = moveUp(array, item);

    // Expect the original array to be returned
    expect(newArray).toBe(array);
  });

  // Test case 4: Item not found in the array
  it('returns the original array when the item is not found in the array', () => {
    const array = ['A', 'B', 'C', 'D'];
    const item = 'E'; // Item not in the array

    const newArray = moveUp(array, item);

    // Expect the original array to be returned
    expect(newArray).toBe(array);
  });

  // Test case 5: Item is already at the first position
  it('returns the original array when the item is already at the first position', () => {
    const array = ['A', 'B', 'C', 'D'];
    const item = 'A'; // Item is already at the first position

    const newArray = moveUp(array, item);

    // Expect the original array to be returned
    expect(newArray).toBe(array);
  });
});
