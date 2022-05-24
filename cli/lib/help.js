import { promises } from 'fs';

const isHelpFile = function (filename) {
	var pattern = /^help(\.\w+){1,2}\.txt$/;
	return filename.match(pattern);
};

const func = async (submodulename, args, vars) => {
	//const allFiles = await promises.readdir(`${vars.__dirname}/assets`);
	//const helpFiles = allFiles.filter(isHelpFile);
	//const readMe = 'help.general.txt';
	//return promises.readFile(`${vars.__dirname}/assets/${readMe}`,{encoding: "utf8"});

	return process.cwd();

};

export default func;