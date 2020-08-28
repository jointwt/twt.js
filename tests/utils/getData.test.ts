import getData from '../../src/utils/getData';

it('fetches data from server when server returns a successful response', async () => {
  const data = await getData({
    url: 'https://successfulresponse.testurl',
    method: 'POST',
    body: {
      foo: 'bar',
    },
  });

  expect(data).toMatchSnapshot();
});

it('fetches data from server when server returns an empty response', async () => {
  const data = await getData({
    url: 'https://emptyresponse.testurl',
    method: 'POST',
    body: {
      foo: 'bar',
    },
  });

  expect(data).toMatchSnapshot();
});

it('handles errors gracefully', async () => {
  const data = await getData({
    url: 'https://nonexistingurl.testurl',
    method: 'POST',
    body: {
      foo: 'bar',
    },
  });

  expect(data).toMatchSnapshot();
});
