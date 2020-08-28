# twt.js

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
