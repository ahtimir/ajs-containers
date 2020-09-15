/* eslint-disable linebreak-style */

import ErrorRepository from '../ErrorRepository';

test('Get error text', () => {
  const error = new ErrorRepository();
  error.addError(404, 'Page Not Found');
  expect(error.translate(404)).toBe('Page Not Found');
});

test('Get Unknown error test', () => {
  const error = new ErrorRepository();
  expect(error.translate(4004)).toBe('Unknown error');
});
