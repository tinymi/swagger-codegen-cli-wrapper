var exec = require('child_process').exec
exports.codegen2 = function (args, callback) {
    exec('java -jar ' + __dirname + '/../bin/swagger-codegen-cli-2.jar ' + (args || []).join(' '), callback);
}
exports.codegen3 = function (args, callback) {
    exec('java -jar ' + __dirname + '/../bin/swagger-codegen-cli-3.jar ' + (args || []).join(' '), callback);
}