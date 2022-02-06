<div align="center">
<h1>eslint-config-oats</h1>
<p>ESLint rules that we use heavily at Shipt when working on our internal tools. Feel free to use these conventions. This project borrows a lot from <a href="https://github.com/kentcdodds/eslint-config-kentcdodds"><code>eslint-config-kentcdodds</code></a> and extends upon it in some places</p>

</div>
<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->


## A note before using
Due to some existing dependencies on ESLint 6 this config doesn't get to use the shiniest new rules or plugins. There are a handful that we've needed to downgrade. Although the rules are still extensive and provide a lot of feedback there may be some that we're not able to support, yet. The following are the plugins that this config uses. Due to [this bug](https://github.com/eslint/eslint/issues/3458) they'll all need to be downloaded as `devDependencies`, too. This has led to issues with more contemporary versions of NPM as it assumes that, if you have similar packages in your `peerDependencies` as in your `dependencies`, they you'll want their versions to match, often overwriting the `dependencies` versions with those from `peerDependencies`.

- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
- [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom)
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [`eslint-plugin-sonarjs`](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library)
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)


### Dependency Versions

```json
{
  "eslint-config-prettier": "^6.15.0",
  "eslint-plugin-import": "^2.25.4",
  "eslint-plugin-jest": "^26.0.0",
  "eslint-plugin-jest-dom": "^4.0.1",
  "eslint-plugin-jsx-a11y": "^6.5.1",
  "eslint-plugin-react": "^7.28.0",
  "eslint-plugin-react-hooks": "^4.3.0",
  "eslint-plugin-sonarjs": "^0.11.0",
  "eslint-plugin-testing-library": "^3.10.2",
  "eslint-plugin-unicorn": "^19.0.1"
}
```
