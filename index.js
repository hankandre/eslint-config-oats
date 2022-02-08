const fs = require('fs')
const path = require('path')
const isCI = require('is-ci')

let tsConfig

if (fs.existsSync('tsconfig.json')) {
  tsConfig = path.resolve('tsconfig.json')
} else if (fs.existsSync('types/tsconfig.json')) {
  tsConfig = path.resolve('types/tsconfig.json')
} else {
  tsConfig = undefined
}

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['prettier', './import'],
  plugins: ['sonarjs', 'unicorn'],
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    'block-scoped-var': 'error',
    'callback-return': 'error',
    camelcase: 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'warn', // If a method doesn't use "this" it can maybe be static
    complexity: 'error',
    'consistent-return': 'error',
    'consistent-this': 'off', // Too may use-cases for reassigning "this" to different values
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'default-case': 'error',
    // 'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-notation': 'error',
    eqeqeq: 'off', // Yes, this is good generally, but not ALWAYS.
    'for-direction': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'getter-return': ['error', { allowImplicit: true }],
    'global-require': 'error',
    'guard-for-in': 'error',
    'grouped-accessor-pairs': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'error', // Renamed to id-denylist in v7.5.0
    'id-length': 'error',
    'id-match': [
      'error',
      // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'init-declarations': 'off',
    'line-comment-position': 'off', // I personally like this on, but that's just me.
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-depth': ['error', 4],
    'max-lines': [
      'error',
      { max: 2500, skipBlankLines: false, skipComments: false },
    ],
    'max-lines-per-function': 'off',
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements': 'off',
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': 'off',
    'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'off',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'off',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'off', // Sometimes used as default props
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'off',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off', // Personally, I like this one, but I'm a vocal minority.
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off', // sometimes this is okay (foo.length -1 == index of last one)
    'no-misleading-character-class': 'off',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'error', // It may be easier to write, but it isn't to read
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error', // Reasoning through the control flow is much harder with nested ternaries.
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    // 'no-nonoctal-decimal-escape': 'error', // eslint >=7
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-param-reassign': 'off', // Not desirable, but it needs to be done sometimes.
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-promise-executor-return': 'off', // prevents: new Promise(r => setTimeout(r))
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-sync': 'off',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off', // not applicable for a config preset (should be configured only in projects)
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-restricted-imports': 'off', // not applicable for a config preset (should be configured only in projects)
    'no-restricted-properties': 'off', // This could be helpful sometimes, but probably best to do in a project.
    'no-restricted-modules': 'off', // set on a project config
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    // 'no-unreachable-loop': 'error', // eslint >=7
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    // 'no-unsafe-optional-chaining': 'error', // eslint >= 7
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    // 'no-unused-private-class-members': 'error', // eslint >= 7
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^ignored',
      },
    ],
    'no-use-before-define': ['error', 'nofunc'],
    // 'no-useless-backreference': 'error', // eslint >=7
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': [
      'error',
      { location: 'anywhere', terms: ['fixme'] },
    ],
    'no-with': 'off',
    'object-shorthand': [
      // methods are optional so you can specify a name if you want.
      'error',
      'properties',
    ],
    'one-var': ['error', { initialized: 'never', uninitialized: 'always' }],
    'operator-assignment': 'off', // readability on a case-by-case basis
    'padding-line-between-statements': 'off', // meh.
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true, allowUnboundThis: true },
    ],
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'warn',
    'prefer-named-capture-group': 'off', // Not a common enough convention to enforce
    'prefer-numeric-literals': 'error',
    // 'prefer-object-has-own': 'error', // eslint >=7
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': 'off', // Doesn't feel worth enforcing, yet.
    'prefer-regex-literals': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-atomic-updates': 'off',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-imports': 'off', // One day we'll leverage `eslint-plugin-import` to do this
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'off',
    strict: 'error',
    'symbol-description': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'error',
    yoda: 'error',

    // eslint-plugin-sonarjs
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-element-overwrite': 'error',
    'sonarjs/no-empty-collection': 'error',
    'sonarjs/no-extra-arguments': 'error',
    'sonarjs/no-identical-conditions': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-one-iteration-loop': 'error',
    'sonarjs/no-use-of-empty-return-value': 'error',
    'sonarjs/non-existent-operator': 'error',
    'sonarjs/cognitive-complexity': 'error',
    'sonarjs/elseif-without-else': 'error',
    'sonarjs/max-switch-cases': 'off', // The rule makes assumptions about larger switch cases
    'sonarjs/no-collapsible-if': 'error',
    'sonarjs/no-collection-size-mischeck': 'error',
    'sonarjs/no-duplicate-string': 'error',
    'sonarjs/no-duplicated-branches': 'error',
    'sonarjs/no-gratuitous-expressions': 'error',
    'sonarjs/no-identical-functions': 'error',
    'sonarjs/no-inverted-boolean-check': 'error',
    'sonarjs/no-nested-switch': 'error', // Let's think readability
    'sonarjs/no-nested-template-literals': 'off',
    'sonarjs/no-redundant-boolean': 'error',
    'sonarjs/no-redundant-jump': 'error',
    'sonarjs/no-same-line-conditional': 'error',
    'sonarjs/no-small-switch': 'warn',
    'sonarjs/no-unused-collection': 'error',
    'sonarjs/no-useless-catch': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/prefer-object-literal': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',
    'sonarjs/prefer-while': 'error',
    'sonarjs/no-ignored-return': 'error',
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/empty-brace-spaces': 'off', // Let prettier handle this
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off', // Maybe someday
    'unicorn/import-index': 'error',
    'unicorn/import-style': 'off', // Best to enable on a project-by-project basis
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off', // Although it might be great it's just not common enough
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-console-spaces': 'off',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-keyword-prefix': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-at': 'off',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-module': 'off', // Some files have to be written in .js, .cjs
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': ['error', { checkFilenames: false }],
    'unicorn/require-post-message-target-origin': 'off',
    'unicorn/string-content': 'off',
    'unicorn/throw-new-error': 'error',

    /**
     * These rules require a more recent version of `eslint-plugin-unicorn` that depends on a more
     * recent version of `eslint`. They can be enabled when that's possible.
     */

    //'unicorn/no-new-array': 'error',
    //'unicorn/consistent-destructuring': 'error',
    //'unicorn/no-array-method-this-argument': 'error',
    //'unicorn/no-array-push-push': 'error',
    //'unicorn/no-await-expression-member': 'error',
    //'unicorn/no-document-cookie': 'error',
    //'unicorn/no-empty-file': 'error',
    //'unicorn/no-instanceof-array': 'error',
    //'unicorn/no-invalid-remove-event-listener': 'error',
    //'unicorn/no-object-as-default-parameter': 'warn',
    //'unicorn/no-lonely-if': 'error',
    //'unicorn/no-static-only-class': 'warn',
    //'unicorn/no-thenable': 'error',
    //'unicorn/no-this-assignment': 'error',
    //'unicorn/no-useless-fallback-in-spread': 'error',
    //'unicorn/no-useless-length-check': 'error',
    //'unicorn/no-useless-promise-resolve-reject': 'error',
    //'unicorn/no-useless-spread': 'error',
    //'unicorn/no-useless-undefined': 'error',
    //'unicorn/numeric-separators-style': 'error',
    //'unicorn/prefer-array-find': 'error',
    //'unicorn/prefer-array-flat': 'error',
    //'unicorn/prefer-array-flat-map': 'error',
    //'unicorn/prefer-array-index-of': 'error',
    //'unicorn/prefer-array-some': 'error',
    //'unicorn/prefer-code-point': 'error',
    //'unicorn/prefer-date-now': 'error',
    //'unicorn/prefer-default-parameters': 'error',
    //'unicorn/prefer-dom-node-append': 'error',
    //'unicorn/prefer-dom-node-dataset': 'error',
    //'unicorn/prefer-dom-node-remove': 'error',
    //'unicorn/prefer-dom-node-text-content': 'error',
    //'unicorn/prefer-export-from': 'error',
    //'unicorn/prefer-json-parse-buffer': 'error',
    //'unicorn/prefer-keyboard-event-key': 'error',
    //'unicorn/prefer-math-trunc': 'error',
    //'unicorn/prefer-node-protocol': 'error', // Let's encourage this usage when possible.
    //'unicorn/prefer-object-from-entries': 'error',
    //'unicorn/prefer-optional-catch-binding': 'error',
    //'unicorn/prefer-prototype-methods': 'error',
    //'unicorn/prefer-regexp-test': 'error', // Requires more recent TS version
    //'unicorn/prefer-string-replace-all': 'error', Requires more recent TS
    //'unicorn/prefer-string-starts-ends-with': 'error',
    //'unicorn/prefer-string-trim-start-end': 'error',
    //'unicorn/prefer-switch': 'error',
    //'unicorn/prefer-ternary': 'error',
    //'unicorn/relative-url-style': 'error',
    //'unicorn/require-array-join-separator': 'error',
    //'unicorn/require-number-to-fixed-digits-argument': 'error',
    //'unicorn/template-indent': 'error',

    // These rules will be deprecated once we update to a more recent version of `eslint-plugin-unicorn`
    'unicorn/no-array-instanceof': 'error',
    'unicorn/prefer-dataset': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-replace-all': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/regex-shorthand': 'error',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-flat-map': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-trim-start-end': 'error',

    // Error these in CI so that we can run them in dev but make sure
    // they don't leak into prod.
    ...(isCI
      ? {
          'no-console': 'error',
          'no-debugger': 'error',
        }
      : null),
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: tsConfig,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'constructor-super': 'off', // ts(2335) & ts(2377)
        'getter-return': 'off', // ts(2378)
        'no-const-assign': 'off', // ts(2588)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2539)
        'no-import-assign': 'off', // ts(2539) & ts(2540)
        'no-new-symbol': 'off', // ts(2588)
        'no-obj-calls': 'off', // ts(2349)
        'no-setter-return': 'off', // ts(2408)
        'no-this-before-super': 'off', // ts(2376)
        'no-undef': 'off', // ts(2304)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
        'valid-typeof': 'off', // ts(2367)

        'consistent-return': 'off', // in TS this is much less an issue
        'no-var': 'error', // TS transpiles let/const to var, so no need for vars any more
        'prefer-const': 'error', // TS provides better types with const
        'prefer-rest-params': 'error', // TS provides better types with rest args over arguments
        'prefer-spread': 'error', // TS transpiles spread to apply, so no need for manual apply

        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'off',

        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',

        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',

        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'off', // ts(2393) & ts(2300)

        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',

        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',

        'no-implied-eval': 'error',
        '@typescript-eslint/no-implied-eval': 'error',

        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',

        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',

        'no-loss-of-precision': 'off',
        // '@typescript-eslint/no-loss-of-precision': 'error', // Requires typescript >=5

        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'off', // ts(2451)

        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^ignored',
          },
        ],

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/ban-types': 'off', // not useful in a reusable config
        '@typescript-eslint/class-literal-property-style': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/consistent-type-imports': 'off', // I think I prefer typed imports, but you can't always use them
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-base-to-string': 'warn',
        '@typescript-eslint/no-confusing-non-null-assertion': 'off', // prettier reformats their "correct" example anyway 🤷‍♂️
        '@typescript-eslint/no-confusing-void-expression': 'off', // honestly, it's probably a good rule, but I do this all the time so...
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'error', // stay away from classes when you can
        '@typescript-eslint/no-floating-promises': 'warn', // not a bad rule, but can be annoying
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'warn',
        '@typescript-eslint/no-inferrable-types': 'off', // I personally prefer relying on inference where possible, but I don't want to lint for it.
        '@typescript-eslint/no-invalid-void-type': 'warn',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': [
          'warn',
          { checksVoidReturn: false },
        ],
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error', //😕
        '@typescript-eslint/no-require-imports': 'off', // sometimes you can't do it any other way
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn', // Not sure about this one.
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error', // makes total sense
        '@typescript-eslint/prefer-for-of': 'error', // I prefer for of, but I don't want to lint for it
        '@typescript-eslint/prefer-function-type': 'off', // though I'm not sure I understand it
        '@typescript-eslint/prefer-includes': 'error', // normally I wouldn't but includes is just so much better
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/sort-type-union-intersection-members': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/unified-signatures': 'warn',
      },
    },
  ],
}
