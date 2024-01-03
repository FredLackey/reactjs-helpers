import { test, expect } from '@jest/globals';

import { doGet } from '../';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';
const GET_RESPONSE = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
};

test('get http response', async () => {

  const response = await doGet(URL);
  expect(response).toEqual(GET_RESPONSE);

});
