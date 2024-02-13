module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    
    // Additional rules
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-unused-expressions': 'error',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-restricted-imports': ['error', 'import1', 'import2'],
    'no-restricted-modules': ['error', 'module1', 'module2'],
    'no-restricted-properties': ['error', { object: 'Math', property: 'pow' }],
    'no-restricted-syntax': ['error', 'FunctionDeclaration'],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
    'react/prop-types': 'off', // If you're using TypeScript, you can turn this off
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },

}
