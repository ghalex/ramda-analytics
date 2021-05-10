module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    include: 'readonly'
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': 0
  }
}
