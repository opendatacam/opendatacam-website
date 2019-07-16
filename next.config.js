const withCSS = require('@zeit/next-css');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withCSS({
  publicRuntimeConfig: {
    URL_PREFIX: process.env.URL_PREFIX || '',
    ROOT_URL: process.env.ROOT_URL || ''
  },
  assetPrefix: isProd ? './' : ''
});
