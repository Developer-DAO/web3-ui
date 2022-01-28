# Getting Started with Create React App and Web3-ui

Start by running
`yarn`
`yarn start`

## Notes about getting to work

[Webpack 5](https://webpack.js.org/configuration/resolve/#resolvefallback) no longer polyfills Node.js core modules automatically.

### Solution

- Install react-app-rewired and the missing modules

If you are using yarn:

```bash
yarn add --dev react-app-rewired stream-browserify assert util stream-http https-browserify os-browserify url buffer process
```

If you are using npm:

```bash
npm install --save-dev react-app-rewired stream-browserify assert util stream-http https-browserify os-browserify url buffer process
```

- Create `config-overrides.js` in the root of your project folder with the content:

```javascript
const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    util: require.resolve('util'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify/browser'),
    url: require.resolve('url'),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  return config;
};
```

- Within `package.json` change the scripts field for start, build and test. Instead of `react-scripts` replace it with `react-app-rewired`

before:

```typescript
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},
```

after:

```typescript
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
},
```

The missing Nodejs polyfills should be included now and your app should be functional with web3.

- If you want to hide the warnings created by the console:

In `config-overrides.js` within the `override` function, add:

```javascript
config.ignoreWarnings = [/Failed to parse source map/];
```
