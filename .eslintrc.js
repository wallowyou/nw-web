require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier 的缩写，覆盖冲突的eslint规则
    // plugin:prettier/recommended内部extends配置了prettier规则，
    // 测试过这里不配置prettier也行，需要注意的是prettier规则放最后
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    // eslint-plugin-prettier 缩写
    // plugin:prettier/recommended内部plugins配置了prettier插件，
    // 测试过这里不配置prettier也行
    'prettier'
  ],
  rules: {},
  globals: {}
};
