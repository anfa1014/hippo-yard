module.exports = {
    extends: [
      'byted/rules/es',
      'byted/rules/import',
      'byted/rules/react',
      'byted/rules/typescript',
      'prettier',
      'prettier/react',
    ],
    plugins: ['react', 'react-hooks', 'import', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'camelcase': 'off',
      '@typescript-eslint/camelcase': 'off',
      'new-cap': 'off',
      'func-names': 'off',
      'require-await': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'react/jsx-key': 'warn',
      'react/no-array-index-key': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/prefer-stateless-function': 'off',
      'import/extensions': 'off', // FIXME
      'import/no-extraneous-dependencies': 'off', // FIXME
  
      'import/order': ['error', {
        groups: ['builtin', 'external', 'internal', ['index', 'sibling', 'parent']],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        'newlines-between': 'always',
      }],
      'sort-imports': ['error', {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }],
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: `./tsconfig.json`,
      tsconfigRootDir: __dirname,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts','jsx','tsx'],
        },
      },
    },
  };
  