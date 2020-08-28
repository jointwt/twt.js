# twt.js

[![npm (latest)](https://img.shields.io/npm/v/twt.js/latest.svg)](https://www.npmjs.com/package/twt.js)
[![Travis CI Build Status](https://travis-ci.org/jointwt/twt.js.svg?branch=master)](https://travis-ci.org/jointwt/twt.js)
[![Maintainability](https://api.codeclimate.com/v1/badges/ee5082067e2cc64784bc/maintainability)](https://codeclimate.com/github/jointwt/twt.js/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ee5082067e2cc64784bc/test_coverage)](https://codeclimate.com/github/jointwt/twt.js/test_coverage)

![Twt logo](https://github.com/jointwt/twt.js/raw/master/assets/logo.png)

Wrapper library for [Twtxt.net API](http://dev.twtxt.net/doc/api.html) written in TypeScript.

Available as Node.js module and a browser library.

# Prerequisites

* **Server:** Node.js 10.x or newer (latest LTS recommended);
* **Browser:** any web browser that supports Fetch API and Promises. Support for Internet Explorer 11 and below can be achieved with relevant polyfills - see [polyfill.io](https://polyfill.io/) and / or [caniuse.com](https://caniuse.com/) for more information.

# Install

`npm install twt.js`

# Manual build

```bash
git clone https://github.com/jointwt/twt.js
cd twt.js
npm install
npm run build
```

If you want to use twt.js in a web browser, the quickest way to start is using a pre-built version of Twt.js via unpkg.com:

```html
<script src='https://unpkg.com/twt.js@latest/dist/web/twt.min.js'></script>
```

# Quick start

Instantiate new `TwtJS` class with URL of the pod you want work with:

```js
const twt = new TwtJS({
  url: 'https://twtxt.net',
});
```

For endpoints that require authentication, use `authenticate` with account credentials to obtain API token.

```js
await twt.authenticate({
  username: 'sample_username',
  password: 'sample_password',
});
```

or, if you want to use API token in your application, you can save it as a variable. Note that once you call `authenticate` twt.js stores the token and uses it internally for authentication whenever needed.

```js
const token = await twt.authenticate({
  username: 'sample_username',
  password: 'sample_password',
});
```

Now you can use all methods available with `TwtJS` class:

```js
const data = await twtAPI.getTimeline({ page: 1 });

// do something with data
console.log(data);
```

# Responses

Twt.js always returns JSON objects formatted in the following way:

```json
{
  status: 200, // HTTP response code or -1 for non-HTTP / network errors
  ok: true // or false
  statusText: 'OK' // Response status or error message
  data: {} // returned data or empty object if no data is returned
}
```

# Available methods

All methods are asynchronous.

## `ping()`

**Requires authentication:** no

Tests the liveness of the selected pod.

```js
const data = await twt.ping();

// do something with data
```
## register({ username: string, password: string, email: string })

**Requires authentication:** no

Creates a new account.

```js
const data = await twt.register({
  username: 'foo'
  password: 'password',
  email: 'email@example.org',
});

// do something with data
```

## authenticate({ username: string, password: string })

**Requires authentication:**: no

Performs API authentication and stores obtained API token in the Twt.js object.

Returns an object containing access token.

```js
const data = await twt.authenticate({
  username: 'foo'
  password: 'password',
});

// do something with data
```

## post({ text: string, postas: string })

**Requires authentication:** yes

Posts a new twt.

```js
const data  = await twt.post({
  text: 'Twt content',
  postas: 'user_or_feed',
});

// do something with data
```

## getTimeline({ page: number })

**Requires authentication:** yes

Retrieves contents of the currently authenticated user's timeline.

```js
const data  = await twt.getTimeline({
  page: 1,
});

// do something with data
```

## getDiscover({ page: number })

**Requires authentication:** no

Retrieves contents of the pod's timeline of all users.

```js
const data  = await twt.getDiscover({
  page: 1,
});

// do something with data
```

## follow({ page: number })

**Requires authentication:** no

Follows a new user or feed.

```js
const data  = await twt.follow({
  nick: 'foo',
  url: 'https://twtxt.net/user/foo/twtxt.txt'
});

// do something with data
```

# More information

* **[twt.js-example](https://github.com/jointwt/twt.js-example)** - sample Node server based on Express.js demonstrating all features of twt.js

# Contributing

Found a bug? Got a question? Need a new feature? Please [file a new issue](https://github.com/jointwt/twt.js/issues) or submit a pull request. Thanks in advance!

Please see the [Contributing Guidelines](https://github.com/jointwt/twt.js/blob/master/CONTRIBUTING.md).

# License

Licensed under MIT License. See [LICENSE](https://github.com/jointwt/twt.js/blob/master/LICENSE) for more information.
