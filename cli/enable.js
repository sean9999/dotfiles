"use strict";
var fs = require('fs');
module.exports = function(fyle,x){
	var source = x.rootdir + '/enabled/' + fyle;
	var destination = x.rootdir + '/available/' + fyle;
	
	fs.symlink(source,destination,function(a,b,c){
		console.log();
	});

	fs.exists(symlink,function(exists){
		if (exists) {
			console.log(fyle + ' is already enabled');
		} else {
			//	let's go!
			console.log(fyle + ' was not found');
		}
	});
};