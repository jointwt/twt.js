export interface APIOptions {
  url: string;
  token?: string;
}

export interface FetchOptions {
  url: string;
  method: HTTPMethod;
  headers?: Headers | string[][] | Record<string, string>,
  body?: object | Body;
}

export interface Account {
  username: string;
  password: string;
}

export interface NewAccount extends Account {
  email: string;
}

export interface PostParams {
  text: string;
  post_as?: string;
}

export interface UserOrFeed {
  nick: string;
  url: string;
}

export interface TimelineParams {
  page: number;
}

export type EndpointName =
  'ping'
  | 'register'
  | 'auth'
  | 'post'
  | 'timeline'
  | 'discover'
  | 'follow';

export type HTTPMethod = 'GET' | 'POST';

export interface EndpointParams {
  endpoint: EndpointName;
  method: HTTPMethod;
}

export interface APIConfig {
  prefix: string;
  version: string;
  api: {
    [key in EndpointName]: EndpointParams;
  };
}

export interface APIResponse<T> {
  ok: boolean,
  status: number,
  statusText: string,
  data: T,
}

export interface PingReply {}

export type UnknownResponse = APIResponse<unknown>;

export type PingResponse = APIResponse<PingReply>;
