"use strict";

import { unlink, exists as _exists } from 'fs';
import fancy from '../fancy.js';

export default function(submodulename,args,vars){
	return new Promise(function(resolve,reject){
		if (args && typeof args === 'object' && "length" in args && args.length ) {
			var fullpath = vars.rootDirectory() + '/enabled/' + args[0];
			var fullpath2= vars.rootDirectory() + '/enabled/' + args[0] + '.private';
			unlink(fullpath,function(err){
				if (err) {
					reject(err);
				} else {
					_exists(fullpath2,function(exists){
						if (exists) {
							unlink(fullpath2,function(err){
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
