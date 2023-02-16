module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    'plugin:prettier/recommended' // 新增
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'prettier' // 新增
  ],
  rules: {
    'prettier/prettier': 'warn', // 新增
    'vue/comment-directive': 'off'
  }
}
