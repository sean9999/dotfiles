"use strict";

var child_process = require('child_process');

module.exports = function(modulename,args,vars) {
    return new Promise(function(resolve,reject){
        child_process.execFile('./update.sh', {cwd: process.env.HOME + '/.dotfiles'},function(err,stdout,stderr){
            if (err) {
                console.error(stderr);
                reject(err);
            } else {
                resolve(stdout);
            }
        });        
    });
});

