#!/usr/bin/env node
'use strict';
var colors = require('colors'), 
    config = require('./config.json'),
    list = require('./lib/ls')('./'), 
    time = require('./lib/time'),
    exec = require('child_process').execFile,
    proc = null,
    lastzik = false,
    currentzik = false;

var set = function (zik) {
    lastzik = currentzik;
    currentzik = zik; 
    if (proc) proc.kill();
    console.log(colors.cyan('['+ time() + ']') + ' Music ' + colors.green(zik.name) + ' is launched!');
    proc = exec('./pifm', [zik.uri, config.freq, config.rate], null, function() {
        proc = null;
        random();
    });
};

var random = function () {
    var number = Math.floor(Math.random() * list.length);
    if (currentzik != list[number]) {
        set(list[number]);
    } else {
        random();
    }
};

var start = function () {
    console.log(colors.cyan('['+ time() + ']') + ' Now this will broadcast on ' +  colors.green(config.freq) + ' MHz and the rate is ' + colors.green(config.rate) + ' Hz.');
    var log = ' This musics will be played ';
    for (var zik in list) {
        log += '\n- '
        log += list[zik].name;
    }
    console.log(colors.cyan('['+ time() + ']') + log)
    random();
}

start();