#!/usr/bin/env node
"use strict";

var fs = require('fs'),
	colour = require('bash-color'),
	CLIError = require('./error.js'),
	playsound = require('./playsound.js'),
	vars = require('./vars.js'),
	submodulename = process.argv[2] || "help",
	submodule = function(){},
	submoduleargs = {
		object: process.argv[3] || ""
	},
	legal_submodule_names=[];

fs.readdir( __dirname + '/lib',function(err,files){
	if (err) {
		throw new CLIError(err);
	}
	legal_submodule_names = files.map(function(fylename){
		return fylename.replace(/\.js$/,'');
	});
	if (legal_submodule_names.indexOf(submodulename) > -1) {
		submodule = require('./lib/'+submodulename+'.js');
	} else {
		vars.error = new Error('Submodule ' + submodulename + ' does not exist');
		submodule = require('./lib/help.js');
	}
	main();
});

function main(){
	switch (submodulename) {
		case 'some-illegal-submodule-name':
		vars.error = new Error('Submodule exists but cannot be legally invoked');
		default:
		try {
			submodule(submodulename,submoduleargs,vars);
			if ("error" in vars && vars.error) {
				throw vars.error;
			}
		} catch (err) {
			try {
				throw new CLIError(err);
			} catch (clierror) {
				console.error(clierror.message);
			}
		}
		break;
	}
}
