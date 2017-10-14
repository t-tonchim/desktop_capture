module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'ecmaVersion' : 2017,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'no-debugger': 0,
    'no-console': 0,
    'indent': [
      'error',
      2
    ],
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
