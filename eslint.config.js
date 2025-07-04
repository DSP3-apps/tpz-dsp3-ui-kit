import globals from 'globals';

import eslintConfig from '@tpzdsp/eslint-config-dsp/eslint';

export default [
  ...eslintConfig,
  {
    name: 'lib-overrides',
    languageOptions: {
      globals: {
        React: true,
        ...globals.browser, // Brings in browser globals like `window`, `document`, etc.
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
  {
    name: 'node-globals',
    files: [
      '**/*.config.[jt]s', // vite.config.ts, next.config.ts, etc
      '**/eslint.config.[jt]s',
      '**/tailwind.config.[jt]s',
      '**/scripts/**/*.[jt]s', // CLI tools or setup scripts
      '**/server/**/*.[jt]s', // server-side helpers if you have them
      '**/app/**/route.[jt]s', // Next.js server routes
      '**/app/**/layout.[jt]s', // optionally server components/layouts
      '**/lib/server/**/*.[jt]s', // server utilities if you split them out
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
