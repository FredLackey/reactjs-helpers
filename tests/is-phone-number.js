import { isValidPhoneNumber } from '../';

describe('isValidPhoneNumber', () => {
  // Test for valid phone numbers
  test('returns true for valid phone numbers', () => {
    expect(isValidPhoneNumber('+1234567890')).toBe(true);
    expect(isValidPhoneNumber('+12 345 678 9012')).toBe(true);
    expect(isValidPhoneNumber('+123 456 789 0123')).toBe(true);
    expect(isValidPhoneNumber('+1 (800) 555-1212')).toBe(true);
    expect(isValidPhoneNumber('(800) 555-1212')).toBe(true);
    expect(isValidPhoneNumber('800.555.1212')).toBe(true);
  });

  // Test for invalid phone numbers
  test('returns false for invalid phone numbers', () => {
    expect(isValidPhoneNumber('1234567890')).toBe(false);
    expect(isValidPhoneNumber('+123')).toBe(false);
    expect(isValidPhoneNumber('+abcde12345')).toBe(false);
    expect(isValidPhoneNumber('++1234567890')).toBe(false);
    expect(isValidPhoneNumber('+12345678901234567')).toBe(false);
    expect(isValidPhoneNumber('')).toBe(false);
    expect(isValidPhoneNumber('800.555.1212')).toBe(false);
  });

  // Test for non-string values
  test('returns false for non-string values', () => {
    expect(isValidPhoneNumber(null)).toBe(false);
    expect(isValidPhoneNumber(undefined)).toBe(false);
    expect(isValidPhoneNumber(1234567890)).toBe(false);
  });
});
