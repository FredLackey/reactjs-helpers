import isValidString from '../utils/is-valid-string';

describe('isValidString', () => {
  it('should return true for a non-empty string', () => {
    expect(isValidString('Hello')).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(isValidString('')).toBe(false);
  });

  it('should return true for an empty string when isEmptyOkay is true', () => {
    expect(isValidString('', true)).toBe(true);
  });

  it('should return false for a non-string value', () => {
    expect(isValidString(123)).toBe(false);
  });
});
