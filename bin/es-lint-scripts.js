const lint = require('../scripts/lint');
const spawn = require('spawn');

const commands = [
    {
        name: 'default',
        description: 'Run default eslint/prettier config'
    },
    {
        name: 'react',
        description: 'Run React eslint/prettier config'
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
        command.file,
        ...otherArgs
    ], { stdio: 'inherit' });
    process.exit(result.status);
};

if (process.argv.length < 3) {
    help();
} else {
    execute();
}