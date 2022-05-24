"use strict";

import playsound from './playsound.js';
import vars from "./vars";
import fancy from "./fancy";

class CLIError extends Error {
	constructor(err) {
		this.name = 'Dotfiles CLI Error';
		const message = err.message || this.name;
		this.message = fancy(message, 'error', vars.message);
		playsound('bad');
		console.error(this.message);
	}
}
CLIError.prototype = Object.create(Error.prototype);


export default CLIError;