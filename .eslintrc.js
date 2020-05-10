module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended' // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }]
  }
};
