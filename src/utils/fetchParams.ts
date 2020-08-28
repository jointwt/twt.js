import config from '../config';
import { EndpointName } from '../types.d';

export default (url: string, endpointName: EndpointName) => {
  const { endpoint, method } = config.api[endpointName];
  return {
    url: `${url}/${config.prefix}/${endpoint}`,
    method,
  };
};
