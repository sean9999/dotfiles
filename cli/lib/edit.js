/**
 * Edit a file using the user's default text editor
 */

import { spawn } from 'child_process';
import fancy from '../fancy.js';

const func = async (submodulename,submoduleargs,vars) => {
	return new Promise(function(resolve,reject){
		var editor = process.env.EDITOR || (function(os){
			var opener = 'open';
			if (os == 'linux') {
				opener = 'xdg-open';
			}
			return opener;
		})(process.platform);
		var filepath= `${vars.rootDirectory()}/available/${submoduleargs[0]}`;
		var exec	= (editor + ' ' + filepath).split(/\s+/g);
		var options	= {
			stdio: 'inherit'
		};
		var child 	= spawn( exec.shift(), exec, options );
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

export default func;