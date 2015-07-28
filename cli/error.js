"use strict";

var	colour = require('bash-color'),
	playsound = require('./playsound.js'),
	colour = require('bash-color');

function CLIError(err) {
	this.name = 'Dotfiles CLI Error';
	this.message = colour.red('⛔  '+err.message) || colour.red('⛔  Dotfiles CLI Error');
	playsound('bad');
}
CLIError.prototype = Object.create(Error.prototype);
CLIError.prototype.constructor = CLIError;

module.exports = CLIError;