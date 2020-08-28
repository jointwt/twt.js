# twt.js

[![npm (latest)](https://img.shields.io/npm/v/twt.js/latest.svg)](https://www.npmjs.com/package/twt.js)
[![Travis CI Build Status](https://travis-ci.org/jointwt/twt.js.svg?branch=master)](https://travis-ci.org/jointwt/twt.js)
[![Maintainability](https://api.codeclimate.com/v1/badges/ee5082067e2cc64784bc/maintainability)](https://codeclimate.com/github/jointwt/twt.js/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ee5082067e2cc64784bc/test_coverage)](https://codeclimate.com/github/jointwt/twt.js/test_coverage)

![Twt logo](https://github.com/jointwt/twt.js/raw/master/assets/logo.png)

Wrapper library for [Twtxt.net API](http://dev.twtxt.net/doc/api.html) written in TypeScript.

# Install

`npm install twt.js`

# Manual build

```bash
git clone https://github.com/jointwt/twt.js
cd twt.js
npm install
npm run build
```

# Quick start

```js
const TwtJS = require('twt.js');
 
const twt = new TwtJs({
  url: 'https://twtxt.net',
});
 
const token = await twt.authenticate({
  username: 'sample_username',
  password: 'sample_password',
});

const timeline = await twt.getTimeline({
  page: 1,
});
 
console.log(data);
```

# Available methods

tbd

# License

Licensed under MIT License. See [LICENSE](https://github.com/jointwt/twt.js/blob/master/LICENSE) for more information.
