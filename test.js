// TODO delete this file

const deepmerge = require('deepmerge');

const abc = {
    'one': 'two',
    array: [
        {
            'type': 'array1',
            name: 'bob'
        }
    ]
};

const def = {
    'three': 'four',
    array: [
        {
            type: 'array1',
            name: 'john'
        }
    ]
};

const ghi = {
    'five': 'six',
    array: [
        {
            type: 'array2',
            name: 'kim'
        }
    ]
};

const combineMerge = (target, source, options) => {
    const destination = target.slice();

    source.forEach((item, index) => {
        const targetIndex = destination.findIndex((destItem) => destItem.type === item.type);
        if (targetIndex >= 0) {
            destination[targetIndex] = deepmerge(destination[targetIndex], item, options);
        } else {
            destination.push(item);
        }
    });

    return destination;
};

const options = {
    arrayMerge: combineMerge
};

console.log(deepmerge(deepmerge(abc, def, options), ghi, options));