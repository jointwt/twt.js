// tslint:disable no-object-mutation
(global.fetch as any) = (url: string) => {
  if (url === 'https://successfulresponse.testurl') {
    return Promise.resolve({
      status: 200,
      ok: true,
      statusText: 'ok',
      headers: {
        get: (name: string) => name === 'content-type'
          ? 'application/json'
          : '',
      },
      json: () => Promise.resolve({
        data: 'mocked successful response',
      }),
      body: {
        message: 'mocked successful response',
      },
      data: {
        message: 'mocked successful response',
      },
    });
  }
  if (url === 'https://emptyresponse.testurl') {
    return Promise.resolve({
      status: 200,
      ok: true,
      statusText: 'ok but empty',
      json: null,
      data: null,
    });
  }
  throw new Error('general mocked error');
}
// tslint:enable no-object-mutation

export default fetch;