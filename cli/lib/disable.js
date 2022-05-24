"use strict";

import { promises } from 'fs';
import fancy from '../fancy.js';
import playsound from '../playsound.js';

const func = async (submodulename, args, vars) => {
	let msg, sound="neutral";
	try {
		await promises.unlink(`${vars.rootDirectory()}/enabled/${args[0]}`);
		msg = fancy(args[0] + ' was disabled', "success");
		sound = 'good';
	} catch (e) {
		msg = fancy(e, "error");
		sound = 'bad';
	}
	playsound(sound);
	return msg;

};

export default func;