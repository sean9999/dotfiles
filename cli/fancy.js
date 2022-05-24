import chalk from "chalk";
import config from "./config.js";
import playsound from "./playsound.js";

export default (msg, type, thisConfig) => {
	var fancyOutput;
	thisConfig = thisConfig || config.message;
	type = type || 'default';
	if (!(type in thisConfig)) {
		type = 'default';
	}
	if (thisConfig[type].colour) {
		let colour = chalk[thisConfig[type].colour];
		fancyOutput = colour(thisConfig[type].char + '  ' + msg);
	} else {
		fancyOutput = thisConfig[type].char + '  ' + msg;
	}
	playsound(thisConfig[type].sound);
	return fancyOutput;
};