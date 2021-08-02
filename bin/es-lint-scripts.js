#!/usr/bin/env node

const spawn = require('cross-spawn');
const path = require('path');
const {
    JS_CONFIG,
    TS_CONFIG,
    REACT_TS_CONFIG,
    REACT_JS_CONFIG,
    VUE_TS_CONFIG,
    VUE_JS_CONFIG,
    SVELTE_CONFIG
} = require('../lint/constants');

const filePath = path.resolve(__dirname, '..', 'scripts', 'lint');

const commands = [
    {
        name: JS_CONFIG,
        description: 'Run JavaScript eslint/prettier config'
    },
    {
        name: TS_CONFIG,
        description: 'Run TypeScript eslint/prettier config'
    },
    {
        name: REACT_JS_CONFIG,
        description: 'Run React JavaScript eslint/prettier config'
    },
    {
        name: REACT_TS_CONFIG,
        description: 'Run React TypeScript eslint/prettier config'
    },
    {
        name: VUE_JS_CONFIG,
        description: 'Run VueJS JavaScript eslint/prettier config'
    },
    {
        name: VUE_TS_CONFIG,
        description: 'Run VueJS TypeScript eslint/prettier config'
    },
    // TODO split out ts stuff
    {
        name: SVELTE_CONFIG,
        description: 'Run Svelte eslint/prettier config'
    }
];

const help = () => {
    console.log('es-lint-scripts');
    commands
        .map((command) => `  ${command.name} = ${command.description}`)
        .forEach((text) => console.log(text));
};

const execute = () => {
    const selected = process.argv[2];
    const command = commands.find((command) => command.name === selected);
    if (!command) {
        throw new Error(`Invalid selection: ${selected}`);
    }

    const otherArgs = process.argv.slice(3);

    const result = spawn.sync('cross-env', [
        `ES_LINT_CONFIG_TYPE=${command.name}`,
        'node',
        filePath,
        ...otherArgs
    ], { stdio: 'inherit' });
    process.exit(result.status);
};

if (process.argv.length < 3) {
    help();
} else {
    execute();
}