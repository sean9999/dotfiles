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
module.exports = vars;
