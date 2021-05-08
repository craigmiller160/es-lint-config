const fs = require('fs');
const path = require('path');
const { eslintTemplate, prettierTemplate } = require('./templates');

const writeFileIfNotExists = (targetPath, template) => {
    if (!fs.existsSync(targetPath)) {
        fs.writeFileSync(targetPath, template);
        return true;
    }
    return false;
};

const eslintSetup = () => {
    const eslintFile = path.resolve(process.cwd(), '.eslintrc.js');
    if (writeFileIfNotExists(eslintFile, eslintTemplate)) {
        console.log('Writing .eslintrc.js file');
    } else {
        console.log('Skipping writing .eslintrc.js file');
    }
};

const prettierSetup = () => {
    const prettierFile = path.resolve(process.cwd(), '.prettierrc.js');
    if (writeFileIfNotExists(prettierFile, prettierTemplate)) {
        console.log('Writing .prettierrc.js file');
    } else {
        console.log('Skipping writing .prettierrc.js file');
    }
};

module.exports = {
    eslintSetup,
    prettierSetup
};