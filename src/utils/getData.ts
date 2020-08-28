import fetch from 'cross-fetch';
import isResponseEmpty from './isResponseEmpty';

import {
  FetchOptions,
  UnknownResponse,
} from '../types.d';

export default async (options: FetchOptions): Promise<UnknownResponse> => {
  try {
    const {
      url,
      method,
      headers,
      body,
    } = options;

    const response = await fetch(url, {
      method,
      headers,
      ...body && { body: JSON.stringify(body) },
    });

    const emptyResponse = await isResponseEmpty(response);

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      data: response.ok && !emptyResponse
        ? await response.json()
        : {},
    };
  } catch (error) {
    return {
      ok: false,
      status: -1,
      statusText: error.message,
      data: {},
    };
  }
};
