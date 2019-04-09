#!/usr/bin/env node
var args = process.argv.splice(process.execArgv.length + 2);
var codegen = require('../lib/index.js').codegen2;
codegen(args, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error}`);
        return;
    }
    console.log(`${stdout}`);
    console.log(`${stderr}`);
})