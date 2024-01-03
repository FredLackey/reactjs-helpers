import { describe, expect, it } from '@jest/globals';
import { isUidFormat } from '../';

describe('isUidFormat', () => {

  it('should return true for a 32-character alphanumeric value', () => {
    expect(isUidFormat('a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6')).toBe(true);
  });

  it('should return false for a non-32-character value', () => {
    expect(isUidFormat('short-uid')).toBe(false);
  });

});
