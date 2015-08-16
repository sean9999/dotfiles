"use strict";

var fs = require('fs'),
	vars = require('../vars.js');

module.exports = function(submodulename,args,vars){
	return new Promise(function(resolve,reject){
		var topic = args[0] || 'general';
		var isHelpFile = function(filename){
			var pattern = /^help(\.\w+){1,2}\.txt$/;
			return filename.match(pattern);
		};
		fs.readdir(vars.rootDirectory() + vars.helpRoot,function(err,files){
			var helpFiles = files.filter(isHelpFile).filter(function(filename){
				var pattern = new RegExp('\.'+topic+'\.');
				return ( filename.match(topic) );
			});
			var goodie = helpFiles.pop() || 'help.general.txt';
			fs.readFile(vars.rootDirectory() + vars.helpRoot + '/' + goodie,{encoding: "utf8"},function(err,data){
				if (err) reject(err);
				resolve(data);
			});
		});
	});
};
