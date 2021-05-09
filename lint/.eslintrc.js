const baseConfig = require('./.eslintrc.base');
const reactConfig = require('./.eslintrc.react');
const tsConfig = require('./.eslintrc.typescript');
const deepmerge = require('deepmerge');

let config;
switch (process.env.ES_LINT_CONFIG_TYPE) {
    case 'js':
        config = baseConfig;
        break;
    case 'ts':
        config = deepmerge(baseConfig, tsConfig);
        break;
    case 'react-js':
        config = deepmerge(baseConfig, reactConfig);
        break;
    case 'react-ts':
        config = deepmerge(deepmerge(baseConfig, tsConfig), reactConfig);
        break;
    default:
        throw new Error(`Invalid es-lint-config type: ${process.env.ES_LINT_CONFIG_TYPE}`);
}

module.exports = config;