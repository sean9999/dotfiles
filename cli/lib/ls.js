import { promises } from 'fs';
import chalk from "chalk";
import Columnizer from 'columnizer';

const func = async (submodulename, submoduleargs, vars) => {

	const cols = new Columnizer,
	makeRow = function (arr1, arr2) {
		const a = chalk.green(arr1.pop() || "");
		const b = chalk.blue(arr2.pop() || "");
		return [a, b];
	};

	const filesEnabled = await promises.readdir(`${vars.rootDirectory()}/enabled`);
	let filesAvailable = await promises.readdir(`${vars.rootDirectory()}/available`);
	filesAvailable = filesAvailable.filter(fyle => {
		return !filesEnabled.includes(fyle);
	});
	filesEnabled.sort().reverse();
	filesAvailable.sort().reverse();

	cols.row(chalk.green.underline('ENABLED'), chalk.blue.underline('AVAILABLE'));
	while (filesEnabled.length || filesAvailable.length) {
		cols.row.apply(cols,makeRow(filesEnabled,filesAvailable));
	}
	return cols._toString();

};

export default func;