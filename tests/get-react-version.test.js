import { getReactVersion } from '../';

describe('getReactVersion', () => {
  it('should return the current React version', () => {
    const version = getReactVersion();
    expect(version).toBeDefined();
    expect(typeof version).toBe('string');
  });
});
