import playsound from './playsound.js';
import vars from "./vars.js";
import fancy from "./fancy.js";

class CLIError extends Error {
	constructor(err) {
		super(err);
		this.name = 'Dotfiles CLI Error';
		const message = err.message || this.name;
		this.message = fancy(message, 'error', vars.message);
		playsound('bad');
		console.error(this.message);
	}
}


export default CLIError;