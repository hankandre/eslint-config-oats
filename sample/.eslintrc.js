module.exports = {
  extends: ['../react.js', '../index.js', '../jest.js'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: require.resolve('./.tsconfig.json'),
      },
    },
  ],
}
