import { test, expect } from '@jest/globals';

import { cleanAlphanumeric } from '../';

test('clean all characters except alphanumeric', () => {

  expect(cleanAlphanumeric('abc123')).toBe('abc123');
  expect(cleanAlphanumeric('abc123!@#')).toBe('abc123');
  expect(cleanAlphanumeric('abc123!@#def')).toBe('abc123def');
  expect(cleanAlphanumeric(' abc 123! @#def!@#  ')).toBe('abc123def');

});