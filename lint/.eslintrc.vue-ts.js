const tsConfig = require('./.eslintrc.typescript');

module.exports = {
    ...tsConfig,
    extends: [
        '@vue/typescript'
    ],
    overrides: [
        {
            ...tsConfig.overrides[0],
            files: [
                '**/*.ts?(x)',
                '**/*.vue'
            ],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module'
            }
        }
    ]
};