
// TODO split out ts stuff
module.exports = {
    overrides: [
        {
            files: [
                '*.svelte'
            ],
            parser: '@typescript-eslint/parser',
            processor: 'svelte3/svelte3'
        }
    ],
    parserOptions: {
        extraFileExtensions: [
            '.svelte'
        ]
    },
    plugins: [
        'svelte3'
    ],
    settings: {
        'svelte3/typescript': require('typescript'),
        'svelte3/ignore-styles': () => true
    }
};