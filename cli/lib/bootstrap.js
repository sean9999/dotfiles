var spawn = require('child_process').spawn,
	fancy = require('../fancy');

module.exports = function (submodulename, fyle, vars) {
	return new Promise(function (resolve, reject) {
		var expanded_path = vars.rootdir.replace('~', process.env.HOME);
		var command = expanded_path + '/bootstrap';
		var args = [];
		var options = {};
		var b = spawn(command, args, options);
		var output = {
			data: [],
			log: function (stuff) {
				output.data.push(stuff);
			},
			dump: function () {
				return output.data.join("\n");
			}
		};
		b.stdout.on('data', function (data) {
			output.log('' + data);
		});
		b.on('close', function (code) {
			if (code !== 0) {
				reject('bootstrap process exited with code ' + code);
			} else {
				output.log(fancy('bootstrapping complete. reload shell to see changes', 'success', vars.message));
				resolve(output.dump());
			}
		});
	});
};
