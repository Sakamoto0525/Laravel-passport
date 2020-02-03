module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "jest/globals": true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier/vue'
  ],
  plugins: ['vue', 'prettier', "jest"],
  rules: {
    semi: [2, 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'prettier/prettier': ['error', {
      semi: false,
      singleQuote: true
    }]
  }
}