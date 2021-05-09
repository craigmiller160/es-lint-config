const baseConfig = require('./.eslintrc.base');
const reactConfig = require('./.eslintrc.react');
const tsConfig = require('./.eslintrc.typescript');
const vueBaseConfig = require('./.eslintrc.vue-base');
const vueTsConfig = require('./.eslintrc.vue-ts');
const deepmerge = require('deepmerge');
const {
    JS_CONFIG,
    TS_CONFIG,
    REACT_TS_CONFIG,
    REACT_JS_CONFIG,
    VUE_TS_CONFIG,
    VUE_JS_CONFIG
} = require('./constants');

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
        case JS_CONFIG:
            return getJsConfig();
        case TS_CONFIG:
            return getTsConfig();
        case REACT_JS_CONFIG:
            return getReactJsConfig();
        case REACT_TS_CONFIG:
            return getReactTsConfig();
        case VUE_JS_CONFIG:
            return getVueJsConfig();
        case VUE_TS_CONFIG:
            return getVueTsConfig();
        default:
            throw new Error(`Invalid es-lint-config type: ${process.env.ES_LINT_CONFIG_TYPE}`);
    }
};

module.exports = getConfig();