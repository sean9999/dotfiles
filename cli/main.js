#!/usr/bin/env node
"use strict";

var enable = require('./enable.js'),
	x = require('./config.json');



/*
var fs    = require('fs'),
  nconf = require('nconf');

nconf.argv([
	{
		"ls": {
			alias: "list",
			describe: "list them"
		}
	},
	{
		"edit": {
			alias: "ed",
			"describe": "edit a dotfile"
		}
	},
	{
		"enable": {
			describe: "enable a dotfile"
		}
	},
	{
		"disable": {
			"describe": "disable a dotfile"
		}
	}
]);
*/

switch (process.argv[2]) {
	case 'enable':
	enable(process.argv[3],x);
	break;
}
