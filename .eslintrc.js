module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['html', '@html-eslint'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },

};
