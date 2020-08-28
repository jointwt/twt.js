import methods from '../methods';

import {
  APIOptions,
  PostParams,
  Account,
  NewAccount,
  TimelineParams,
  UserOrFeed,
} from '../types.d';

export default class TwtJS {
  url: string;

  token: string;

  constructor(options: APIOptions) {
    this.url = options.url;
    this.token = options.token || '';
  }

  ping = () => methods.ping({
    url: this.url,
    token: this.token,
  });

  register = (account: NewAccount) => methods.register(account, {
    url: this.url,
    token: this.token,
  });

  authenticate = async (account: Account) => {
    const response = await methods.authenticate(account, {
      url: this.url,
    });
    this.token = (response.data as any).token;
    return this.token;
  };

  post = (params: PostParams) => methods.post(params, {
    url: this.url,
    token: this.token,
  });

  getTimeline = (params: TimelineParams) => methods.getTimeline(params, {
    url: this.url,
    token: this.token,
  });

  getDiscover = (params: TimelineParams) => methods.getDiscover(params, {
    url: this.url,
    token: this.token,
  });

  follow = (userOrFeed: UserOrFeed) => methods.follow(userOrFeed, {
    url: this.url,
    token: this.token,
  });
}
