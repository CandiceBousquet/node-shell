var fs = require('fs');
var request = require('request');

module.exports.ls = function (input) {
	fs.readdir('.', function(err, files) {
	  if (err) throw err;
	  files.forEach(function(file) {
	    process.stdout.write("\n" + file.toString());
	  })
	process.stdout.write('\nprompt > ');
	});
}

module.exports.pwd = function (input) {
	process.stdout.write('\n'+process.cwd());
	process.stdout.write('\nprompt > ');
}

module.exports.date = function (input) {
	process.stdout.write('\n'+ new Date());
	process.stdout.write('\nprompt > ');
}

module.exports.echo = function (input) {
	if(input[0] === "$") {
		var variable = input.substring(1);
		process.stdout.write('\n' + process.env[variable]);
	}else {
		process.stdout.write('\n'+ input);
	}
	process.stdout.write('\nprompt > ');
}

module.exports.cat = function (fileName) {
	fs.readFile(fileName, (err, data) => {
		if(err) throw err;
		process.stdout.write('\n' + data);
		process.stdout.write('\nprompt > ');
	});
}

module.exports.head = function (fileName) {
	fs.readFile(fileName, (err, data) => {
		if(err) throw err;
		var array = data.toString().split("\n");
		for(var i=0;i<5;i++){
			process.stdout.write('\n' + array[i]);
		}
		process.stdout.write('\nprompt > ');
	});
}

module.exports.tail = function (fileName) {
	fs.readFile(fileName, (err, data) => {
		if(err) throw err;
		var array = data.toString().split("\n");
		for(var i=array.length-5;i<array.length;i++){
			process.stdout.write('\n' + array[i]);
		}
		process.stdout.write('\nprompt > ');
	});
}

module.exports.sort = function (fileName) {
	fs.readFile(fileName, (err, data) => {
		if(err) throw err;
		var array = data.toString().split("\n");
		process.stdout.write('\n' + array.sort());
		process.stdout.write('\nprompt > ');
	});	
}

module.exports.wc = function (fileName) {
	fs.readFile(fileName, (err, data) => {
		if(err) throw err;
		var array = data.toString().split("\n");
		process.stdout.write('\n' + array.length);
		process.stdout.write('\nprompt > ');
	});	
}

module.exports.uniq = function (fileName) {
	fs.readFile(fileName, (err, data) => {
		if(err) throw err;
		var array = data.toString().split("\n");
		var returnArr = [array[0]];
		for(var i=1;i<array.length;i++){
			if(array[i] != array[i-1]) {
				returnArr.push(array[i]);
			}
		}
		process.stdout.write('\n' + returnArr.join("\n"));
		process.stdout.write('\nprompt > ');
	});	
}

module.exports.curl = function (url) {
	request(url, function (err, resp, body) {
		if(err) throw err;
		process.stdout.write('\n' + resp.body);
		// for (key in resp) {
		// 	JSON
		// }
		process.stdout.write('\nprompt > ');
	});
}