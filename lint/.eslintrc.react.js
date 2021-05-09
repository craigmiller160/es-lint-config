
module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    parser: 'babel-eslint', // TODO if needed, change to @babel/eslint-parser
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    rules: {
        'react/display-name': 0,
        'react-hooks/exhaustive-deps': 'error'
    }
};