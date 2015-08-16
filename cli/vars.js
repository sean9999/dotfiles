"use strict";

var vars = require('./config.json');
vars.get = function(k){
	if (k in vars) {
		return vars[k];
	} else {
		return null;
	}
};
vars.set = function(k,v){
	vars[k] = v;
};
vars.rootDirectory = function(){
	return vars.rootdir.replace('~',process.env.HOME);
};

module.exports = vars;
