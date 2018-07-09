const constants = require('generator-jhipster/generators/generator-constants');

const INTERPOLATE_REGEX = constants.INTERPOLATE_REGEX;
const CURRENT_SERVER_TEMPLATE_PATH = '';
const SERVER_MAIN_SRC_DIR = constants.SERVER_MAIN_SRC_DIR;
const SERVER_TEST_SRC_DIR = constants.SERVER_TEST_SRC_DIR;

const files = {
    serverBuild: [
        {
            condition: generator => generator.buildTool === 'maven',
            templates: [
                {file: 'pom.xml', options: {interpolate: INTERPOLATE_REGEX}}
            ]
        }
    ],
    serverJavaUserManagement: [
        {
            condition: generator => !generator.skipUserManagement,
            path: SERVER_MAIN_SRC_DIR,
            templates: [
                /* User management java service files */
                { file: 'package/service/UserService.java', renameTo: generator => `${generator.javaDir}service/UserService.java` },
                /* User management java web files */
                { file: 'package/service/dto/UserDTO.java', renameTo: generator => `${generator.javaDir}service/dto/UserDTO.java` },
                { file: 'package/web/rest/UserResource.java', renameTo: generator => `${generator.javaDir}web/rest/UserResource.java` },
                { file: 'package/service/mapper/UserMapper.java', renameTo: generator => `${generator.javaDir}service/mapper/UserMapper.java` }
            ]
        },
        {
            condition: generator => !generator.skipUserManagement,
            path: SERVER_TEST_SRC_DIR,
            templates: [
                { file: 'package/web/rest/UserResourceIntTest.java', renameTo: generator => `${generator.testDir}web/rest/UserResourceIntTest.java` },
                { file: 'package/web/rest/AccountResourceIntTest.java', renameTo: generator => `${generator.testDir}web/rest/AccountResourceIntTest.java` }
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
