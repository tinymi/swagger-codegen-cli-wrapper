var exec = require('child_process').exec
exports.codegen = function (args, callback) {
    exec('java -jar ' + __dirname + '/../bin/swagger-codegen-cli.jar ' + (args || []).join(' '), callback);
}