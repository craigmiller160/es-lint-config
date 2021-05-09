const importRestrictions = require('./importRestrictions');

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    env: {
        browser: true,
        amd: true,
        node: true,
        'jest/globals': true
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    plugins: [
        'jest'
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'no-console': [
            'error',
            {
                allow: ['error']
            }
        ],
        'no-restricted-imports': [
            'error',
            importRestrictions
        ]
    }
};