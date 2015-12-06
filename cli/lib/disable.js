"use strict";

var fs = require('fs'),
	fancy = require('../fancy.js');

module.exports = function(submodulename,args,vars){
	return new Promise(function(resolve,reject){
		if (args && typeof args === 'object' && "length" in args && args.length ) {
			var fullpath = vars.rootDirectory() + '/enabled/' + args[0];
			var fullpath2= vars.rootDirectory() + '/enabled/' + args[0] + '.private';
			fs.unlink(fullpath,function(err){
				if (err) {
					reject(err);
				} else {
					fs.exists(fullpath2,function(exists){
						if (exists) {
							fs.unlink(fullpath2,function(err){
								if (err) {
									reject(err);
								} else {
									//	run dotfiles_reload and then resolve
									resolve( fancy('The dotfile '+args[0]+'was disabled') );
								}
							});
						} else {
							//	run dotfiles_reload and then resolve
							resolve( fancy('The dotfile '+args[0]+'was disabled') );
						}
					});
				}
			});
		} else {
			reject(Error('Bad Arguments'));
		}
	});
};
