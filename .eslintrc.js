module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-use-before-define': ['off'],
    'no-use-before-define': 'off',
    'space-before-function-paren': ['off'],
    'prettier/prettier': ['off'],
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-useless-return': ['off'],
    'spaced-comment': ['off'],
    'react-hooks/exhaustive-deps': ['off'],
  },
};
