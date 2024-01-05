require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    './.eslintrc.js',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'prettier'
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier']
};
