module.exports = {
  root: true,
  env: {
    "cypress/globals": true,
    browser: true,
    node: true
  },
  plugins: [
    'cypress',
    'vuejs-accessibility'
  ],
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    'plugin:vuejs-accessibility/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off'
  }  
}
