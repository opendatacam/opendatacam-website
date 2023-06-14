const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    publicRuntimeConfig: {
        URL_PREFIX: process.env.URL_PREFIX || '',
        ROOT_URL: process.env.ROOT_URL || ''
    },
    assetPrefix: isProd ? './' : '',
    output: 'export',
    distDir: 'docs',
}
