import { promises} from 'fs';
import fancy from "../fancy.js";


const func = async (submodulename, args, vars) => {
	let fyle;
	if (args.length < 1 || typeof args[0] !== 'string' || args[0] === 0) {
		reject(Error('cannot enable this illegal thing'));
	}
	fyle = args[0];

	var symlink  	= vars.rootDirectory() + '/enabled/' + fyle;
	var realfile	= vars.rootDirectory() + '/available/' + fyle;

	let msg, r;
	try {
		const ln = await promises.symlink(realfile, symlink);
		msg = fancy('dotfile succesfully enabled','success');
	} catch(e) {
		msg = fancy(e, "error");
		//throw e;
	} finally {
		console.log(msg);
	}
	return "";

};

export default func;
