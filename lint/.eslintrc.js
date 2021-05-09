const baseConfig = require('./.eslintrc.base');
const reactConfig = require('./.eslintrc.react');
const tsConfig = require('./.eslintrc.typescript');
const vueBaseConfig = require('./.eslintrc.vue-base');
const vueTsConfig = require('./.eslintrc.vue-ts');
const deepmerge = require('deepmerge');

const getJsConfig = () => baseConfig;
const getTsConfig = () => deepmerge(baseConfig, tsConfig);
const getReactJsConfig = () => deepmerge(baseConfig, reactConfig);
const getReactTsConfig = () => deepmerge(
    deepmerge(
        baseConfig,
        tsConfig
    ),
    reactConfig
);
const getVueJsConfig = () => deepmerge(baseConfig, vueBaseConfig);
const getVueTsConfig = () => deepmerge(
    deepmerge(
        deepmerge(
            baseConfig,
            vueBaseConfig
        ),
        tsConfig
    ),
    vueTsConfig
)

const getConfig = () => {
    switch (process.env.ES_LINT_CONFIG_TYPE) {
        case 'js':
            return getJsConfig();
        case 'ts':
            return getTsConfig();
        case 'react-js':
            return getReactJsConfig();
        case 'react-ts':
            return getReactTsConfig();
        case 'vue-js':
            return getVueJsConfig();
        case 'vue-ts':
            return getVueTsConfig();
        default:
            throw new Error(`Invalid es-lint-config type: ${process.env.ES_LINT_CONFIG_TYPE}`);
    }
};

module.exports = getConfig();