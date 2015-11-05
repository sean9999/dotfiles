"use strict";

var fs = require('fs'),
	fancy = require('../fancy.js');

module.exports = function(submodulename,args,vars){
	return new Promise(function(resolve,reject){
		if (args && typeof args === 'object' && "length" in args && args.length ) {
			var fullpath = vars.rootDirectory() + '/enabled/' + args[0];
			fs.unlink(fullpath,function(err){
				if (err) {
					reject(err);
				} else {
					//	run dotfiles_reload and then resolve
					resolve( fancy('The dotfile '+args[0]+'was disabled') );
				}
			});
		} else {
			reject(Error('Bad Arguments'));
		}
	});
};