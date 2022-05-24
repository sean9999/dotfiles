import vars, { get, set, rootDirectory, rootdir } from './config.json';

get = function(k){
	if (k in vars) {
		return vars[k];
	} else {
		return null;
	}
};
set = function(k,v){
	vars[k] = v;
};
rootDirectory = function(){
	return rootdir.replace('~',process.env.HOME);
};

export default vars;
