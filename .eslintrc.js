module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended'],
  env: {
    jest: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'no-undef': 'off',
  },
}
