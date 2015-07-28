#!/usr/bin/env node
"use strict";

var fs = require('fs'),
	onlyJavascript = function(filename){
		return /\.js$/.test(filename);
	},
	toModulePairs = function(filename){
		return {
			path: "./"+filename,
			modulename: filename.replace(/\.js$/,'')
		};
	},
	vars = require('./vars.js'),
	cli = {},
	submodulename = process.argv[2] || "help",
	submodule = require('./'+submodulename+'.js');

switch (submodulename) {
	default:
	submodule(process.argv[3],vars);
	break;
}
