import { describe, expect, it } from '@jest/globals';
import { isObject } from '../';

describe('isObject', () => {
  it('should return true for a plain object', () => {
    expect(isObject({})).toBe(true);
  });

  it('should return false for an array', () => {
    expect(isObject([])).toBe(false);
  });

  it('should return false for a function', () => {
    expect(isObject(function() {})).toBe(false);
  });

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for a number', () => {
    expect(isObject(42)).toBe(false);
  });

  it('should return false for a string', () => {
    expect(isObject('Hello')).toBe(false);
  });
});
