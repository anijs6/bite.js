const prettierConfig = require('@anijs/prettier')
module.exports = {
  ...prettierConfig,
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      options: {
        singleQuote: false
      }
    }
  ]
}
