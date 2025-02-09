import eslintConfig from '@tpzdsp/eslint-config-dsp/eslint';

export default [
  ...eslintConfig,
  {
    name: 'lib-overrides',
    languageOptions: {
      globals: {
        React: true,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/consistent-type-definitions':['error', 'type'],
    },
  },
];
