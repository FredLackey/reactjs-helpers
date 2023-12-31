import isAlphanumeric from '../utils/is-alphanumeric';

describe('isAlphanumeric', () => {

  it('should return true for alphanumeric input', () => {
    expect(isAlphanumeric('abc123')).toBe(true);
  });

  it('should return false for non-alphanumeric input', () => {
    expect(isAlphanumeric('abc$123')).toBe(false);
  });

});
