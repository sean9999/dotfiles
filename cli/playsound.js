"use strict";

/**
 * play a sound in a detached process, but fail silently if you can't
 * completely ignores stout and stderr
 * @returns { nothing } undefined
 */

var spawn = require('child_process').spawn;
const CLIP_ROOT = __dirname + '/assets/';

var darwinParams = function(clip_path) {
	var command = '/usr/bin/env';
	var args = ['play','-q','-v','0.2',clip_path + '.mp3'];
	var options = {
		stdio: ['ignore','ignore','ignore'],
		detached: true
	};
	var r = {};
	r.command = command;
	r.args  = args;
	r.options = options;
	return r;
};

var ubuntuParams = function(clip_path) {
	var command = '/usr/bin/env';
	var args = ['aplay',clip_path + '.wav'];
	var options = {
		stdio: ['ignore','ignore','ignore'],
		detached: true
	};
	var r = {};
	r.command = command;
	r.args  = args;
	r.options = options;
	return r;
};

var windowsParams = function(clip_path) {

	var windoze_script = '
		# http://stackoverflow.com/questions/20418730/batch-file-to-play-a-song
		@echo off
		set file=track12.mp3
		( echo Set Sound = CreateObject("WMPlayer.OCX.7"^)
		  echo Sound.URL = "%file%"
		  echo Sound.Controls.play
		  echo do while Sound.currentmedia.duration = 0
		  echo wscript.sleep 100
		  echo loop
		  echo wscript.sleep (int(Sound.currentmedia.duration^)+1^)*1000) >sound.vbs
		start /min sound.vbs
	';
	return;

};

var playsound = function(clipname){
	var clip_path = CLIP_ROOT + clipname;
	var params = {};
	switch (process.platform) {
		case 'linux':
		params = ubuntuParams(clip_path);
		break;
		default:
		params = darwinParams(clip_path);
		break;
	}
	var clip = spawn(params.command,params.args,params.options);
	clip.unref();
	return;
};

module.exports = playsound;
