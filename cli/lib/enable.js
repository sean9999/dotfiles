"use strict";
var fs = require('fs'),
	fancy = require('../fancy.js');

module.exports = function(submodulename,args,vars){
	return new Promise(function(resolve,reject){
		var fyle;
		if (args.length < 1 || typeof args[0] !== 'string' || args[0] === 0) {
			reject(Error('cannot enable this illegal thing'));
		}
		fyle = args[0];
		var linkname = vars.rootDirectory() + '/enabled/' + fyle;
		var target = vars.rootDirectory() + '/available/' + fyle;
		fs.exists(target,function(exists){
			if (exists) {
				fs.symlink(target,linkname,function(err,ok){
					if (err) {
						reject(err);
					} else {
						//	run dotfiles_reload and then resolve
						resolve( fancy('dotfile succesfully enabled','success') );
					}
				});			
			} else {
				reject(Error('dotfile does not exist'));
			}
		});		
	});
};