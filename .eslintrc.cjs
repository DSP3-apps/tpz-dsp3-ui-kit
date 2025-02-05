module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: { browser: true, node: true, mocha: true, es6: true },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:storybook/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest-dom/recommended',
    'prettier',
    '@tpzdsp/eslint-config-dsp',

    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended',
    // 'plugin:storybook/recommended',
    // 'plugin:import/recommended',
    // 'plugin:import/typescript',
    // 'plugin:react/jsx-runtime',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:jsx-a11y/recommended',
    // 'plugin:jest-dom/recommended',
    // 'prettier',
    // '@tpzdsp/eslint-config-dsp',
    // 'plugin:vitest/recommended',
  ],
  plugins: [
    'no-only-tests',
    'react-hooks',
    '@typescript-eslint',
    'jsx-a11y',
    'jest-dom',
    'vitest',
    'react-refresh',

    // 'react-refresh',
    // 'no-only-tests',
    // 'react-hooks',
    // '@typescript-eslint',
    // 'jsx-a11y',
    // 'jest-dom',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        project: './tsconfig.json',
      },
      alias: {
        map: [['@/', './src/']],
      },
    },
  },
  // ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
