import isResponseEmpty from '../../src/utils/isResponseEmpty';

const emptyResponse = {} as Response;

const jsonResponse = {
  headers: {
    get: (name: string) => name === 'content-type' ? 'application/json' : null,
  }
} as Response;


const notEmptyTextResponse = {
  headers: {
    get: (name: string) => name === 'content-type' ? 'text/plain' : null,
  },
  text: () => Promise.resolve('aaaa'),
} as unknown as Response;

const emptyTextResponse = {
  headers: {
    get: (name: string) => name === 'content-type' ? 'text/plain' : null,
  },
  text: () => '',
} as unknown as Response;

test('should return true for empty response', async () => {
  expect(await isResponseEmpty(emptyResponse)).toEqual(true);
});

test('should return false for JSON response', async () => {
  expect(await isResponseEmpty(jsonResponse)).toEqual(false);
});

test('should return false for non-empty text response', async () => {
  expect(await isResponseEmpty(notEmptyTextResponse)).toEqual(false);
});

test('should return true for empty text response', async () => {
  expect(await isResponseEmpty(emptyTextResponse)).toEqual(true);
});