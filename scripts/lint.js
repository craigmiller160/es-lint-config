const { ESLint } = require('eslint');
const path = require('path');
const { prettierSetup, eslintSetup } = require('./files');

const execute = async () => {
    eslintSetup(); // TODO need to customize this so that the react arg can be passed in
    prettierSetup();
    console.log('Running eslint validation');

    const eslint = new ESLint({
        errorOnUnmatchedPattern: false,
        useEslintrc: true,
        fix: true,
        fixTypes: [
            'problem',
            'suggestion',
            'layout'
        ]
    });

    const results = await eslint.lintFiles([
        path.resolve(process.cwd(), 'src'),
        path.resolve(process.cwd(), 'test'),
        path.resolve(process.cwd(), 'cypress')
    ]);
    await ESLint.outputFixes(results);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);

    if (resultText.length > 0) {
        console.log(resultText);
        process.exit(1);
    }
};

execute()
    .catch((error) => {
        process.exitCode = 1;
        console.error(error);
    });
