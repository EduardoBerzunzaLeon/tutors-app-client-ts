const RULES = {

  OFF: 'off',

  WARN: 'warn',

  ERROR: 'error',

};



module.exports = {

  settings: {

    'import/extensions': [ '.js', '.jsx', '.ts', '.tsx' ],

    'import/parsers': {

      '@typescript-eslint/parser': [ '.ts', '.tsx' ],

    },

    'import/resolver': {

      node: {

        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],

      },

    },

  },

  env: {

    browser: true,

    es2021: true,

    node: true,

    'jest/globals': true,

  },

  extends: [

    'plugin:react/recommended',

    'airbnb',

  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {

    ecmaFeatures: {

      jsx: true,

    },

    ecmaVersion: 13,

    sourceType: 'module',

  },

  plugins: [

    'react',

    '@typescript-eslint',

    'jest',

  ],

  rules: {

    'react/jsx-filename-extension': [ RULES.ERROR, { extensions: [ '.js', '.jsx', '.ts', '.tsx' ]}],

    'react/react-in-jsx-scope': RULES.OFF,

    'react/jsx-curly-spacing': [ RULES.ERROR, {

      when: 'never',

      allowMultiline: false,

    }],

    'import/extensions': [

      'error',

      'ignorePackages',

      {

        js: 'never',

        jsx: 'never',

        ts: 'never',

        tsx: 'never',

      },

    ],

    'array-bracket-spacing': [ 'error', 'always', { singleValue: true, objectsInArrays: false, arraysInArrays: false }],

    'object-curly-spacing': [ 'error', 'always', { objectsInObjects: false, arraysInObjects: false }],

    'arrow-body-style': [ 'error', 'as-needed' ],

    'linebreak-style': [ 'error', 'windows' ],

  },

};
