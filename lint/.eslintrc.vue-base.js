
module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    extends: [
        'plugin:vue/vue3-essential'
    ],
    rules: {
        // 'vue/script-indent': ['error', 4, { baseIndent: 1 }]
        'vue/script-indent': 0
    }
};