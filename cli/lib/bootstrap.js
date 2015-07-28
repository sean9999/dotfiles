"use strict";

var spawn = require('child_process').spawn,
	playsound = require('../playsound.js'),
	colour = require('bash-color');

var bootstrap = function(submodulename,fyle,vars){
	var expanded_path = vars.rootdir.replace('~',process.env.HOME);
	var command = expanded_path + '/bootstrap';
	var args = [];
	var options = {};
	var b = spawn(command,args,options);
	b.stdout.on('data', function (data) {
		console.log('' + data);
	});	
	b.on('close',function(code){
		if (code !== 0) {
			console.log('bootstrap process exited with code ' + code);
		} else {
			console.log( colour.green(vars.char.good'  bootstrapping complete. reload shell to see changes') );
			playsound('good');		
		}
	});
};

module.exports = bootstrap;
