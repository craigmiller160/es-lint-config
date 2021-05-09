const deepmerge = require('deepmerge');

const abc = {
    'one': 'two'
};

const def = {
    'three': 'four'
};

const ghi = {
    'five': 'six'
};

console.log(deepmerge(deepmerge(abc, def), ghi));