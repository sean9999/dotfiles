"use strict";

var	playsound = require('./playsound.js'),
	vars = require('./vars.js'),
	fancy = require('./fancy.js');

function CLIError(err) {
	this.name = 'Dotfiles CLI Error';
	var message = err.message || this.name;
	this.message = fancy(message,'error',vars.message);
	playsound('bad');
	console.error(this.message);
}
CLIError.prototype = Object.create(Error.prototype);
CLIError.prototype.constructor = CLIError;

module.exports = CLIError;