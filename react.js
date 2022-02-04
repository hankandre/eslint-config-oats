const readPkgUp = require('read-pkg-up')
const semVer = require('semver')

let oldestSupportedReactVersion = '16.5.2'

let hasPropTypes = false

try {
  const { packageJson } = readPkgUp.sync({ normalize: true })
  const allDeps = {
    react: oldestSupportedReactVersion,
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  }

  hasPropTypes = allDeps.hasOwnProperty('prop-types')
  oldestSupportedReactVersion = semVer
    .validRange(allDeps.react)
    .replace(/[>=<|]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .sort(semVer.compare)[0]
} catch (error) {
  // meh
}

module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: oldestSupportedReactVersion,
    },
  },
  rules: {
    'react/boolean-prop-naming': 'error', // enforces `is`/`has` prefixes for boolean prop types
    'react/button-has-type': 'warn',
    'react/default-props-match-prop-types': hasPropTypes ? 'error' : 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': ['error', { ignoreTranspilerName: false }],
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': hasPropTypes ? 'error' : 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': [
      'warn',
      { children: 'ignore', props: 'never' },
    ],
    // When able to update these rules will be handled by eslint-config-prettier
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-wrap-multilines': 'off',
    // END: rules eventually handled by prettier, when we update
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off', // Although I personally like this it's not common enough to enforce
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
        custom: 'enforce',
        explicitSpread: 'enforce',
      },
    ],
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off', // For larger components this can be nice, but isnt necessary
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'off',
    'react/no-array-index-key': 'off', // sometimes it's not a big deal, or yah don't compare
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'warn',
    'react/no-danger': 'off', // Sometimes danger
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-namespace': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'warn',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': hasPropTypes ? 'error' : 'off',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'off',
    'react/prefer-exact-props': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': hasPropTypes ? 'error' : 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off', // sometimes the default is `undefined`
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'off',
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.ts', '.tsx'] },
        ],
        'react/prop-types': 'off',
      },
    },
  ],
}
