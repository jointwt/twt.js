import config from '../../src/config';

test('config should be defined', () => {
  expect(config).toMatchSnapshot();
});
