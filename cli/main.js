"use strict";

var fs = require('fs'),
	CLIError = require('./error.js'),
	vars = require('./vars.js'),
	submodulename = process.argv[2] || "help",
	submodule = function(){},
	submoduleargs = process.argv.slice(3),
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
		vars.error = new Error('Submodule exists but cannot be legally invoked');
		default:
		submodule(submodulename,submoduleargs,vars).then(good).catch(bad);
		break;
	}
}
