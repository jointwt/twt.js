import TwtJS from '../../src/classes/TwtJS';

jest.mock('../../src/methods/index', () => ({
  ping: () => Promise.resolve({
    message: 'successful mocked ping call',
  }),
  register: () => Promise.resolve({
    message: 'successful mocked register call',
  }),
  authenticate: () => Promise.resolve({
    data: {
      token: 'sample_mocked_token',
    },
    message: 'successful mocked authenticate call',
  }),
  post: () => Promise.resolve({
    message: 'successful mocked post call',
  }),
  getTimeline: () => Promise.resolve({
    message: 'successful mocked timeline call',
  }),
  getDiscover: () => Promise.resolve({
    message: 'successful mocked discover call',
  }),
  follow: () => Promise.resolve({
    message: 'successful mocked follow call',
  }),
}));

const getTwtInstance = () => new TwtJS({
  url: 'https://sample.url',
});

test('TwtJS class should be defined', () => {
  expect(TwtJS).toBeDefined();
});

test('TwtJS class should expose all API methods', () => {
  const twtJs = getTwtInstance();
  expect(typeof twtJs.ping).toBe('function');
  expect(typeof twtJs.register).toBe('function');
  expect(typeof twtJs.authenticate).toBe('function');
  expect(typeof twtJs.post).toBe('function');
  expect(typeof twtJs.getTimeline).toBe('function');
  expect(typeof twtJs.getDiscover).toBe('function');
  expect(typeof twtJs.follow).toBe('function');
});

test('ping should call methods.ping', async () => {
  const twtJs = getTwtInstance();
  const data = await twtJs.ping();
  expect(data).toMatchSnapshot();
});

test('register should call methods.register', async () => {
  const twtJs = getTwtInstance();
  const data = await twtJs.register({
    username: 'test_username',
    password: 'test_password',
    email: 'test@email.tld',
  });

  expect(data).toMatchSnapshot();
});

test('authenticate should call methods.authenticate', async () => {
  const twtJs = getTwtInstance();
  const data = await twtJs.authenticate({
    username: 'test_username',
    password: 'test_password',
  });

  expect(data).toMatchSnapshot();
});

test('post should call methods.post', async () => {
  const twtJs = getTwtInstance();
  const data = await twtJs.post({
    text: 'sample_text',
    postas: 'sample_user',
  });

  expect(data).toMatchSnapshot();
});


test('getTimeline should call methods.getTimeline', async () => {
  const twtJs = getTwtInstance();
  const data = await twtJs.getTimeline({
    page: 1,
  });

  expect(data).toMatchSnapshot();
});

test('getTimeline should call methods.getTimeline', async () => {
  const twtJs = getTwtInstance();
  const data = await twtJs.getTimeline({
    page: 1,
  });

  expect(data).toMatchSnapshot();
});

test('getDiscover should call methods.getDiscover', async () => {
  const twtJs = getTwtInstance();
  const data = await twtJs.getDiscover({
    page: 1,
  });

  expect(data).toMatchSnapshot();
});

test('follow should call methods.follow', async () => {
  const twtJs = getTwtInstance();
  const data = await twtJs.follow({
    nick: 'sample_nick',
    url: 'https://sample_feed_url',
  });

  expect(data).toMatchSnapshot();
});