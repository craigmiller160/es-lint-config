#!/usr/bin/env node

const spawn = require('cross-spawn');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'scripts', 'lint');

const commands = [
    {
        name: 'js',
        description: 'Run JavaScript eslint/prettier config'
    },
    {
        name: 'ts',
        description: 'Run TypeScript eslint/prettier config'
    },
    {
        name: 'react-js',
        description: 'Run React JavaScript eslint/prettier config'
    },
    {
        name: 'react-ts',
        description: 'Run React TypeScript eslint/prettier config'
    },
    {
        name: 'vue-js',
        description: 'Run VueJS JavaScript eslint/prettier config'
    },
    {
        name: 'vue-ts',
        description: 'Run VueJS TypeScript eslint/prettier config'
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