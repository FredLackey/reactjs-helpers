import { describe, expect, it } from '@jest/globals';

import { getLatestSemver } from '../';

describe('getLatestSemver', () => {
  it('should return null for an empty input array', () => {
    expect(getLatestSemver([])).toBe(null);
  });

  it('should return null if no valid semantic versions are found', () => {
    expect(getLatestSemver(['invalid1', 'invalid2', 'invalid3'])).toBe(null);
  });

  it('should calculate the latest semantic version correctly', () => {
    const versions = ['2.0.0', '1.0.0', '3.0.0'];
    expect(getLatestSemver(versions)).toBe('3.0.0');
  });

  it('should handle multiple versions with the same major and minor versions', () => {
    const versions = ['1.0.1', '2.0.0', '1.1.0', '2.0.1', '1.1.1', '2.0.2'];
    expect(getLatestSemver(versions)).toBe('2.0.2');
  });

  it('should handle versions with pre-release identifiers', () => {
    const versions = ['1.0.0-alpha', '1.0.0-beta', '1.0.0', '2.0.0', '2.0.0-rc', '3.0.0'];
    expect(getLatestSemver(versions)).toBe('3.0.0');
  });

  it('should handle versions with mixed pre-release and non-pre-release versions', () => {
    const versions = ['1.0.0-alpha', '2.0.0', '1.0.0-beta', '2.0.0-rc', '1.0.0', '3.0.0'];
    expect(getLatestSemver(versions)).toBe('3.0.0');
  });
});