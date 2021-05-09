
// TODO need to add this and replace parser with vue-eslint-parser in the TS overrides section
const parserOptions = {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
}

module.exports = {
    extends: [
        '@vue/typescript'
    ]
};