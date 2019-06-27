const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    publicRuntimeConfig: {
        URL_PREFIX: process.env.URL_PREFIX || "",
        ROOT_URL: process.env.ROOT_URL || ""
    }
})
