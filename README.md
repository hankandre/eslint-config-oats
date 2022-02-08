<div align="center">
<h1>eslint-config-oats</h1>
<p>ESLint rules that we use heavily at Shipt when working on our internal tools. Feel free to use these conventions. This project borrows a lot from <a href="https://github.com/kentcdodds/eslint-config-kentcdodds"><code>eslint-config-kentcdodds</code></a> and extends upon it in some places.</p>

</div>

## A note before using

Due to some existing dependencies on ESLint 6 this config doesn't get to use the shiniest new rules or plugins. There are a handful that we've needed to downgrade. Although the rules are still extensive and provide a lot of feedback there may be some that we're not able to support, yet. The following are the plugins that this config uses. Due to [this bug](https://github.com/eslint/eslint/issues/3458) they'll all need to be downloaded as `devDependencies`, too. `@typescript-eslint/eslint-plugin` is only needed for Typescript projects.

- [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
- [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom)
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [`eslint-plugin-sonarjs`](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library)
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [`eslint-plugin-cypress`](https://github.com/cypress-io/eslint-plugin-cypress)

## Installation

To install all this config and all its associated plugins enter the following command into your terminal:

```sh
npm i -D eslint-config-oats eslint@^6.0.0 typescript@^4.0.0 @typescript-eslint/eslint-plugin@^4.0.0\
 @typescript-eslint/parser@^4.0.0 eslint-plugin-unicorn@^19.0.0 eslint-plugin-testing-library@^3.0.0\
 eslint-plugin-sonarjs eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-react eslint-plugin-jest\
 eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-cypress
```

## Usage

The base config is generic and can be used to lint either Browser or NodeJS files. When using this in a React app, ESM modules, or Cypress. The config should be extended.

```js
module.exports{
  extends: [
    'oats',
    'oats/import',
    'oats/react',
    'oats/cypress'
  ]
}
```

### Typescript

This config supports TypeScript out of the box but, when using the `oats/cypress` config you may run into issues, if you're using Typescript with your Cypress files, too. In this scenario it's best to create a separate `tsconfig.json` just for linting and include all of the relevant types in it. Having a separate `tsconfig.json` for linting is a good practice whenever you have files that may not end up in your build(s), but you still want type safety around. Here's an example:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "react",
    "types": ["cypress"]
  },
  "include": ["**/*.ts", "**/*.tsx"]
}
```

### Cypress

Using two different testing frameworks with two different assertions, such as Jest and Cypress, can sometimes lead to trouble. The `oats/jest` config, by default, is looking for every file that has a suffix of `.test` or `.spec`, or that is in a `__tests__` directory. If this naming convention is followed with Cypress tests, there can end up being conflicts between the Cypress-specific rules and the Jest-specific rules. An easy solution is to just nix the `.spec` or `.test` from the Cypress file name (`cypress/integration/homepage.ts`), otherwise the conflicting Jest rules can be overridden in the lint config.

```diff
  "eslintConfig": {
    "extends": [
      "oats",
      "oats/react",
      "oats/import",
      "oats/jest",
      "oats/cypress"
+    ],
+    "overrides": [
+      {
+        "files": ["**/cypress/**/*.+(ts|js)?(x)"],
+        "rules": {
+          "jest/some-rule": "off"
+        }
+      }
+    ]
+  }
```

Another option is to enable/disable rules for specific files.

```diff
  "eslintConfig": {
    "extends": [
      "oats",
      "oats/react",
      "oats/import"
+    ],
+    "overrides": [
+      {
+        "files": ["**/!(cypress)/**/*.{spec,test}.+(ts|js)?(x)"],
+        "extends": ["oats/jest"]
+      },
+      {
+         "files": ["/**/cypress/**/*.+(ts|js)?(x)"],
+         "extends": ["oats/cypress"]
+       }
+    ]
+  }
```
