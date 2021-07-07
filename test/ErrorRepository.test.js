/* eslint-disable linebreak-style */
import ErrorRepository from '../src/js/ErrorRepository';

test('Code error is in repository', () => {
  expect(new ErrorRepository().translate(200)).toBe('ОК. Успешная обработке запроса');
});

test('Code error no in repository', () => {
  expect(new ErrorRepository().translate(700)).toBe('Unknown error');
});
