const isCI = require('is-ci')

module.exports = {
  plugins: ['cypress'],
  env: {
    browser: true,
    es6: true,
    'cypress/globals': true,
  },
  rules: {
    'cypress/assertion-before-screenshot': 'error',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-async-tests': 'error',
    'cypress/no-force': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/require-data-selectors': 'off',
    ...(isCI
      ? {
          'cypress/no-pause': 'error',
        }
      : null),
  },
  overrides: [
    {
      files: ['**/cypress/**/*.ts'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
}
