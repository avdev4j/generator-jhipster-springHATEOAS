const constants = require('generator-jhipster/generators/generator-constants');

const INTERPOLATE_REGEX = constants.INTERPOLATE_REGEX;
const CURRENT_SERVER_TEMPLATE_PATH = '';

const files = {
    myModule: [
        {
            condition: generator => generator.buildTool === 'maven',
            templates: [
                {file: 'pom.xml', options: {interpolate: INTERPOLATE_REGEX}}
            ]
        }
    ]
};

module.exports = {
    writeFiles
};


function writeFiles() {
    this.writeFilesToDisk(files, this, false, CURRENT_SERVER_TEMPLATE_PATH);
}
