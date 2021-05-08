const importRestrictions = require('./importRestrictions');
const path = require('path');

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended'
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
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:@typescript-eslint/recommended'],
            settings: {
                'import/resolver': {
                    typescript: {
                        project: path.resolve(process.cwd(), 'tsconfig.json')
                    }
                }
            },
            rules: {
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-explicit-any': 'error'
            }
        }
    ]
};