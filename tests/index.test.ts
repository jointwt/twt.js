import TwtJS from '../src';
import * as TwtJsClass from '../src/classes/TwtJS'

test('TwtJS should be imported', () => {
  expect(TwtJS).toEqual(TwtJsClass.default);
});
