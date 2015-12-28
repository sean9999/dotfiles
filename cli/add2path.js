#!/usr/bin/env node

/**
 * add2path. a helper to manage Bash's $path
 * accepts a path (string), and an optional position specifier (int), and gloms it onto the path, if it's not already there
 * @param String :: $newDir :: The new directory you'd like to add to the path
 * @param Int :: $position :: The desired position. 0 means at the beginning. A really high value (ex: 100) means at the end. Default is at the end.
 *
 * It should have the following features:
 * If $newDir is not a valid directory, do not alter the path. Emit a warning, but do not return an error.
 * If $newDir is already in $PATH, and no $position was specified, do nothing
 * If $newDir is already in $PATH, and $position _was_ specififed, move $newDir to desired position
 * If any component of $PATH is not a valid directory, remove it, emit a warning, and continue processing.
 **/

var fs = require('fs');
//  remove zero-length args
var args = process.argv.slice(2).filter(function(arg){
    return (arg);
});

;(function(args){
    "use strict";
    var good = function(stuff){
        process.stdout.write( stuff.trim() );

    };
    var bad = function(stuff){
        console.trace(stuff);
    };
    var meh = function(msg){
        //console.warn(msg);
    };
    var sanityCheck = function(){
        return new Promise(function(resolve,reject){
            if (args.length < 2) {
                reject(Error('too few args'));
            }
            if (args.length > 3) {
                reject(Error('Too many args'));
            }
            if (args.length === 3) {
                if ( parseInt(args[2]).toString() !== args[2] ) {
                    reject(Error('position argument was not an integer'));
                }
            }
            resolve(args);
        });
    };
    var args2Scope = function(args){
        return new Promise(function(resolve,reject){
            var bigPath = args[0].split(':');
            var newDir = args[1];
            var position = bigPath.length;
            var wantPosition = false;
            if (2 in args) {
                position = Number.parseInt(args[2]);
                wantPosition = true;
                position = Math.min(position,bigPath.length);
            }
            var newDirIsAlreadyInPath = (bigPath.indexOf(newDir) > -1);
            var scope = {
                bigPath: bigPath,
                newDir: newDir,
                position: position,
                wantPosition: wantPosition,
                newDirIsAlreadyInPath: newDirIsAlreadyInPath
            };
            resolve(scope);
        });
    };
    var dirExists = function(dir) {
        return new Promise(function(resolve,reject) {
            fs.access(dir,fs.R_OK,function(err) {
                if (err) {
                    resolve(false);
                } else {
                    resolve(dir);
                }
            });
        });
    };
    var removeDirtyDirs = function(scope) {
        return Promise.all( scope.bigPath.map(dirExists) ).then(function(cleanDirs){
            scope.bigPath = cleanDirs.filter(function(dir){
                return (dir);
            });
            return scope;
        });
    };
    var removeDuplicates = function(scope) {
        return new Promise(function(resolve,reject){
            var deduped = scope.bigPath.filter(function(dir,pos,arr){
                return ( pos === arr.lastIndexOf(dir) );
            });
            scope.bigPath = deduped;
            resolve(scope);            
        });
    };
    var serialize = function(scope){
        return Promise.resolve( scope.bigPath.join(':') );
    };
    var add2Path = function(scope){
        return new Promise(function(resolve,reject){
            if (scope.wantPosition) {
                if ( scope.newDirIsAlreadyInPath && scope.position !== scope.bigPath.indexOf(scope.newDir)) {
                    scope.bigPath = scope.bigPath.filter(function(dir){
                        return (dir !== scope.newDir);
                    });
                }
                scope.bigPath.splice(scope.position,null,scope.newDir);
            } else {
                if ( scope.newDirIsAlreadyInPath ) {
                    meh('The directory is already in $PATH. Doing nothing');
                } else {
                    scope.bigPath[scope.position] = scope.newDir;
                }
            }
            resolve(scope);
        });
    };

    sanityCheck()
        .then(args2Scope)
        .then(add2Path)
        .then(removeDirtyDirs)
        .then(removeDuplicates)
        .then(serialize)
        .then(good)
        .catch(bad);

})(args);
