"use strict";

/**
 * Simply outputs the file (like the unix cat).
 * This is of course tantamount to endorsing cat abuse, but we forgive ourselves
 * @param {String} [fileName] [The name of the file to read. We first try the available/ directory, and if nothing is found, we look in the /home dir. If still nothing is found, return error]
 * @returns {Promise} [resolves with file contents (text), rejects with fs error] 
 */

import { readFile, exists as _exists } from 'fs';

export default function(modulename,args,vars){
	return new Promise(function(resolve,reject){
		var fyle	= args[0],
			path1	= vars.rootDirectory() + '/available/' + fyle,
			path2	= process.env.HOME+'/'+fyle,
			opts 	= {encoding: "utf8"},
			catTheFile = function(fullpath){
				readFile(fullpath,opts,function(err,contents){
					if (err) {
						reject(err);
					}
					resolve(contents);
				});
			};		
		if ( !(args.length) || !(args[0].length) ) {
			reject(Error('Not enough information'));
		}
		_exists(path1,function(exists){
			if (exists) {
				catTheFile(path1);
			} else {
				_exists(path2,function(exists){
					if (exists) {
						catTheFile(path2);
					} else {
						reject(Error('There is no file called ' + fyle));
					}
				});
			}
		});
	});
};
