"use strict";

var	colour = require('bash-color'),
	playsound = require('./playsound.js');

module.exports = function(msg,type,config){
	var fancyOutput;
	config = config || {
		"error": {
			"char": "❗",
			"colour": "red",
			"sound": "bad.mp3"
		},
		"success": {
			"char": "✅",
			"colour": "green",
			"sound": "good.mp3"
		},
		"default": {
			"char": "◱",
			"colour": false,
			"sound": "neutral.mp3"
		}
	};
	type = type || 'default';
	if (! (type in config) ) {
		type = 'default';
	}
	if (config[type].colour) {
		fancyOutput = colour[ config[type].colour ]( config[type].char + '  ' + msg );
	} else {
		fancyOutput = config[type].char + '  ' + msg;
	}
	playsound( config[type].sound );
	return fancyOutput;
};