import { describe, expect, it } from '@jest/globals';

import { isSemver } from '../';

describe('isSemver', () => {
  // Test valid semantic version strings
  it('should return true for valid semantic version strings', () => {
    expect(isSemver('1.2.3')).toBe(true);
    expect(isSemver('2.0.0-alpha')).toBe(true);
    expect(isSemver('3.4.5-beta+build789')).toBe(true);
  });

  // Test invalid semantic version strings
  it('should return false for invalid semantic version strings', () => {
    expect(isSemver('not_a_semver')).toBe(false);
    expect(isSemver('1.2')).toBe(false);
    expect(isSemver('1.2.3-@invalid')).toBe(false);
    expect(isSemver('1.2.3+invalid+build')).toBe(false);
  });

  // Test non-string inputs
  it('should return false for non-string inputs', () => {
    expect(isSemver(123)).toBe(false);
    expect(isSemver(null)).toBe(false);
    expect(isSemver(undefined)).toBe(false);
    expect(isSemver({ version: '1.2.3' })).toBe(false);
  });
});
