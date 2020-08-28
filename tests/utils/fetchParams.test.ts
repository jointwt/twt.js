import fetchParams from '../../src/utils/fetchParams';
import config from '../../src/config';
import { EndpointName } from '../../src/types.d';

const endpoints = Object.keys(config.api);
const url = 'https://sample.twt.instance';

test('should generate correct fetch params for all known endpoint names', () => {
  endpoints.forEach(endpoint => {
    expect(fetchParams(url, endpoint as EndpointName)).toMatchSnapshot();
  })
});
