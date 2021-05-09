const baseConfig = require('./.eslintrc.base');
const reactConfig = require('./.eslintrc.react');
const deepmerge = require('deepmerge');

let config;
switch (process.env.ES_LINT_CONFIG_TYPE) {
    case 'react':
        config = deepmerge(baseConfig, reactConfig);
        break;
    default:
        config = baseConfig;
}

module.exports = config;