import CLIError from './error.js';
import vars from './vars.js';

const submodulename = process.argv[2] || "help";
const submoduleargs = process.argv.slice(3);

function good(stuff) {
	console.log(stuff);
};

function bad(errorOrString) {
	var error;
	if (typeof errorOrString === 'string') {
		error = new Error(errorOrString);
	} else if (errorOrString instanceof Error) {
		error = errorOrString;
	} else {
		error = Error('Badly Invoked Error with type: ' + typeof errorOrString);
		console.error(errorOrString);
	}
	throw new CLIError(error);
};

const main = async () => {
	let submodule;
	try {
		submodule = await import(`./lib/${submodulename}.js`);
	} catch (e) {
		bad(e);
		submodule = await import('./lib/help.js');
	} finally {
		submodule.default(submodulename, submoduleargs, vars).then(good).catch(bad);
	}
};

main();