import { test, expect } from '@jest/globals';

import { addMinutes } from '../';

test('add minutes with number', async () => {

  const originalIso = '2023-12-18T22:50:53.294Z';
  const futureIso = '2023-12-18T22:52:53.294Z';

  const minutes = 2;
  
  const original = new Date(originalIso);
  
  const future = addMinutes(original, minutes);
  expect(future.toISOString()).toEqual(futureIso);

});

test('add minutes with string', async () => {
  const originalIso = '2023-12-18T22:50:53.294Z';
  const futureIso = '2023-12-18T22:52:53.294Z';

  const minutesStr = '2';
  
  const original = new Date(originalIso);
  
  const future = addMinutes(original, minutesStr);
  expect(future.toISOString()).toEqual(futureIso);

});
