"use strict";

var fs = require('fs'),
	colour 	= require('bash-color'),
	Columnizer = require('columnizer');

module.exports = function(submodulename,submoduleargs,vars){
	return new Promise(function(resolve,reject){
		var cols = new Columnizer,
			makeRow = function(arr1,arr2,arr3){
				var a = colour.green(arr1.pop() || "");
				var b = colour.purple(arr2.pop() || "");
				var c = colour.white(arr3.pop() || "");
				return [a,b,c];
			},
			ig = vars.ignorefiles,
			en = [],
			av = [],
			homelinks = [],
			unique = function(v,i,a){ return (i === a.lastIndexOf(v)); },
			allowed = function(v){ return (ig.indexOf(v) === -1); };

		fs.readdir(vars.rootDirectory()+'/enabled',function(err,files){
			if (err) reject(err);
			en = files.filter(allowed);
			fs.readdir(vars.rootDirectory()+'/available',function(err,files2){
				if (err) reject(err);
				av = files2.filter(allowed).filter(function(f){
					return (en.indexOf(f) === -1);
				});
				fs.readdir(vars.rootDirectory()+'/home',function(err,homefiles){
					if (err) reject(err);
					homefiles.forEach(function(f){
						homelinks.push(f);
					});
					cols.row(colour.green('ENABLED',true), colour.purple('AVAILABLE',true), colour.white('Home Symlinks',true));
					while (en.length || av.length || homelinks.length) {
						cols.row.apply(cols,makeRow(en,av,homelinks));
					}
					resolve(cols._toString());
				});
			});
		});
	});
};
