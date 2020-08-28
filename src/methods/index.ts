import getData from '../utils/getData';
import fetchParams from '../utils/fetchParams';

import {
  APIOptions,
  PingResponse,
  NewAccount,
  Account,
  PostParams,
  TimelineParams,
  UserOrFeed,
  UnknownResponse,
} from '../types.d';

export default {
  ping: (options: APIOptions) => getData({
    ...fetchParams(options.url, 'ping'),
  }) as Promise<PingResponse>,

  register: (account: NewAccount, options: APIOptions) => getData({
    ...fetchParams(options.url, 'register'),
    body: account,
  }) as Promise<UnknownResponse>,

  authenticate: (account: Account, options: APIOptions) => getData({
    ...fetchParams(options.url, 'auth'),
    body: account,
  }) as Promise<UnknownResponse>,

  post: (params: PostParams, options: APIOptions) => getData({
    ...fetchParams(options.url, 'post'),
    headers: {
      Token: options.token,
    } as Record<string, string>,
    body: params,
  }) as Promise<UnknownResponse>,

  getTimeline: (params: TimelineParams, options: APIOptions) => getData({
    ...fetchParams(options.url, 'timeline'),
    headers: {
      Token: options.token,
    } as Record<string, string>,
    body: params,
  }) as Promise<UnknownResponse>,

  getDiscover: (params: TimelineParams, options: APIOptions) => getData({
    ...fetchParams(options.url, 'discover'),
    headers: {
      Token: options.token,
    } as Record<string, string>,
    body: params,
  }) as Promise<UnknownResponse>,

  follow: (userOrFeed: UserOrFeed, options: APIOptions) => getData({
    ...fetchParams(options.url, 'follow'),
    headers: {
      Token: options.token,
    } as Record<string, string>,
    body: userOrFeed,
  }) as Promise<UnknownResponse>,
};
