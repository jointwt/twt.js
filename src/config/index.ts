import { APIConfig } from '../types.d';

export default {
  prefix: 'api/v1',
  api: {
    ping: {
      endpoint: 'ping',
      method: 'GET',
    },
    register: {
      endpoint: 'register',
      method: 'POST',
    },
    auth: {
      endpoint: 'auth',
      method: 'POST',
    },
    post: {
      endpoint: 'post',
      method: 'POST',
    },
    timeline: {
      endpoint: 'timeline',
      method: 'POST',
    },
    discover: {
      endpoint: 'discover',
      method: 'POST',
    },
    follow: {
      endpoint: 'follow',
      method: 'POST',
    },
  },
} as APIConfig;
