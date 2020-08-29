import methods from '../../src/methods';

jest.mock('../../src/utils/getData', () => (params: unknown) => Promise.resolve({  
  status: 200,
  message: 'ok',
  data: {
    message: 'successful mocked response from getData',
    params,
  }
}));

const testOptions = {
  url: 'https://sample.test.url',
  token: 'sample_test_token',
}

test('all methods are defined', () => {
  expect(typeof methods.ping).toBe('function');
  expect(typeof methods.register).toBe('function');
  expect(typeof methods.authenticate).toBe('function');

});

test('ping calls getData', async () => {
  const data = await methods.ping(testOptions);

  expect(data).toMatchSnapshot();

});

test('register calls getData', async () => {
  const testAccount = {
    username: 'sample_login',
    password: 'sample_password',
    email: 'sample@test.email.tld',
  };

  const data = await methods.register(testAccount, testOptions);

  expect(data).toMatchSnapshot();

});

test('authenticate calls getData', async () => {
  const testAccount = {
    username: 'sample_login',
    password: 'sample_password',
  };

  const data = await methods.authenticate(testAccount, testOptions);

  expect(data).toMatchSnapshot();

});

test('post calls getData', async () => {
  const testPost = {
    text: 'sample_text',
    post_as: 'sample_user',
  };

  const data = await methods.post(testPost, testOptions);

  expect(data).toMatchSnapshot();

});

test('getTimeline calls getData', async () => {
  const testParams = {
    page: 1,
  };

  const data = await methods.getTimeline(testParams, testOptions);

  expect(data).toMatchSnapshot();

});

test('getDiscover calls getData', async () => {
  const testParams = {
    page: 1,
  };

  const data = await methods.getDiscover(testParams, testOptions);

  expect(data).toMatchSnapshot();

});

test('follow calls getData', async () => {
  const testParams = {
    nick: 'sample_user',
    url: 'sample_feed_url',
  };

  const data = await methods.follow(testParams, testOptions);

  expect(data).toMatchSnapshot();

});
