const {
    JS_CONFIG,
    TS_CONFIG,
    REACT_TS_CONFIG,
    REACT_JS_CONFIG,
    VUE_TS_CONFIG,
    VUE_JS_CONFIG
} = require('../lint/constants');

const getJsExtensions = () => ([
    '.js'
]);

const getTsExtensions = () => ([
    '.js',
    '.ts'
]);

const getReactJsExtensions = () => ([
    '.js',
    '.jsx'
]);

const getReactTsExtensions = () => ([
    '.js',
    '.jsx',
    '.ts',
    '.tsx'
]);

const getVueJsExtensions = () => ([
    '.js',
    '.vue'
]);

const getVueTsExtensions = () => ([
    '.js',
    '.ts',
    '.vue'
]);

const getExtensions = () => {
    switch (process.env.ES_LINT_CONFIG_TYPE) {
        case JS_CONFIG:
            return getJsExtensions();
        case TS_CONFIG:
            return getTsExtensions();
        case REACT_JS_CONFIG:
            return getReactJsExtensions();
        case REACT_TS_CONFIG:
            return getReactTsExtensions();
        case VUE_JS_CONFIG:
            return getVueJsExtensions();
        case VUE_TS_CONFIG:
            return getVueTsExtensions();
        default:
            throw new Error(`Invalid es-lint-config type: ${process.env.ES_LINT_CONFIG_TYPE}`);
    }
};

module.exports = getExtensions;