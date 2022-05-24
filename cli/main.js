"use strict";

import { readdir } from 'fs';
import CLIError from './error.js';
import vars, { error as _error } from './vars.js';

const submodulename = process.argv[2] || "help";
let submodule = function () { };
const submoduleargs = process.argv.slice(3);
let legal_submodule_names = [];

readdir( __dirname + '/lib',function(err,files){
	if (err) {
		throw new CLIError(err);
	}
	legal_submodule_names = files.map(function(fylename){
		return fylename.replace(/\.js$/,'');
	});
	if (legal_submodule_names.indexOf(submodulename) > -1) {
		submodule = require('./lib/'+submodulename+'.js');
	} else {
		_error = new Error('Submodule ' + submodulename + ' does not exist');
		submodule = require('./lib/help.js');
	}
	main();
});

function good(stuff){
	console.log(stuff);
};

function bad(errorOrString){
	var error;
	if (typeof errorOrString === 'string') {
		error = new Error(errorOrString);
	} else if ( errorOrString instanceof Error ) {
		error = errorOrString;
	} else {
		error = Error('Badly Invoked Error with type: ' + typeof errorOrString);
		console.error(errorOrString);
	}
	throw new CLIError(error);
};

function main(){
	switch (submodulename) {
		case 'some-illegal-submodule-name':
		_error = new Error('Submodule exists but cannot be legally invoked');
		default:
		submodule(submodulename,submoduleargs,vars).then(good).catch(bad);
		break;
	}
}
