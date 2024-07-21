const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

const options = {
  ...browserify.defaultOptions,
  typescript: require.resolve('typescript'),
};

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  return config;
};
