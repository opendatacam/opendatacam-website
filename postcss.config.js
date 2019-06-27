
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  // For now do not do anything
  content: ['./components/*.js','./pages/*.js'],
  whitelist: ['html', 'body'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
