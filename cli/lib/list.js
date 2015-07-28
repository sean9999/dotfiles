"use strict";

var fs = require('fs'),
	colour = require('bash-color');

module.exports = function(submodulename,submoduleargs,vars){
	var exanded_root = vars.rootdir.replace('~',process.env.HOME);
	var ig = vars.ignorefiles;
	var en = [];
	var av = [];
	var unique = function(v,i,a){ return (i === a.lastIndexOf(v)); };
	var allowed = function(v){ return (ig.indexOf(v) === -1); };
	fs.readdir(exanded_root+'/enabled',function(err,files){
		en = files.filter(allowed);
		fs.readdir(exanded_root+'/available',function(err,files2){
			av = files2.filter(allowed);
			console.log(colour.green('#	ENABLED',true));
			console.log(colour.purple('#	AVAILABLE',true));
			[].concat(en,av).filter(unique).forEach(function(item){
				if ( en.indexOf(item) > -1 ) {
					console.log( colour.green(item) );
				} else {
					console.log( colour.purple(item) );
				}
			});
			console.log('#	symlinked home files');
			fs.readdir(exanded_root+'/home',function(err,homefiles){
				if (err) throw err;
				homefiles.forEach(function(f){
					console.log(f);
				});
			});			
		});
	});
};
