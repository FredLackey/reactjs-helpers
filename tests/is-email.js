import { isEmail } from '../';

describe('isEmail', () => {
  // Test for valid email addresses
  test('returns true for valid email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('user.name@domain.co')).toBe(true);
    expect(isEmail('user_name@domain.co')).toBe(true);
    // Add more valid cases as needed
  });

  // Test for invalid email addresses
  test('returns false for invalid email addresses', () => {
    expect(isEmail('test@')).toBe(false);
    expect(isEmail('test@domain')).toBe(false);
    expect(isEmail('@domain.com')).toBe(false);
    expect(isEmail('test@domain..com')).toBe(false);
    expect(isEmail('test@domain.com.')).toBe(false);
    expect(isEmail('test domain.com')).toBe(false);
    expect(isEmail('test@domain .com')).toBe(false);
    // Add more invalid cases as needed
  });

  // Test for edge cases
  test('returns false for non-string values', () => {
    expect(isEmail('')).toBe(false);
    expect(isEmail(null)).toBe(false);
    expect(isEmail(undefined)).toBe(false);
    expect(isEmail(123)).toBe(false);
    // Add more edge cases as needed
  });
});
