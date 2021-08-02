const path = require('path');

module.exports = {
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking'
            ],
            settings: {
                // TODO remove this if the parserOptions stuff stays
                'import/resolver': {
                    typescript: {
                        project: path.resolve(process.cwd(), 'tsconfig.json')
                    }
                }
            },
            parserOptions: {
                // TODO concerned about this in other projects
                tsconfigRootDir: process.cwd(),
                project: './tsconfig.json'
            },
            rules: {
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-explicit-any': 'error'
            }
        }
    ]
};