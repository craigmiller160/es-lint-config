const path = require('path');

module.exports = {
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