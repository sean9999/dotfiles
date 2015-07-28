"use strict";
var fs = require('fs');
module.exports = function(fyle,x){
	var rootdir = x.rootdir.replace('~',process.env.HOME);
	var linkname = rootdir + '/enabled/' + fyle;
	var target = rootdir + '/available/' + fyle;
	fs.exists(target,function(exists){
		if (exists) {
			fs.symlink(target,linkname,function(err,ok){
				if (err) {
					console.error(err.code);
				} else {
					console.log('dotfile succesfully enabled');
				}
			});			
		} else {
			console.error('dotfile does not exist');
		}
	});
};