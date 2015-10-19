"use strict";

/**
 * Edit a file using the user's default text editor
 */

var child_process = require('child_process'),
	fancy = require('../fancy.js');

module.exports 	= function(submodulename,submoduleargs,vars) {
	return new Promise(function(resolve,reject){
		var editor = process.env.EDITOR || (function(os){
			var opener = 'open';
			if (os == 'linux') {
				opener = 'xdg-open';
			}
			return opener;
		})(process.platform);
		var filepath= '~/.dotfiles/available/'.replace('~',process.env.HOME) + submoduleargs[0];
		var exec	= (editor + ' ' + filepath).split(/\s+/g);
		var options	= {};
		var child 	= child_process.spawn( exec.shift(), exec, options );
		child.on('close', function (code) {
			var msg = 'child process exited with code ' + code;
			if (code === 0) {
				//	run dotfiles_reload and then resolve
				resolve( fancy(msg,'success'));
			} else {
				reject(Error(msg));
			}
		});
	});
};