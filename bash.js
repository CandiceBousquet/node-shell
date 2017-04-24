var commands = require('./commands.js');
process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var input = data.toString().trim();
  var cmd = input.split(" ")[0];
  if(commands.hasOwnProperty(cmd)) commands[cmd](input.split(cmd + " ")[1]);
  // process.stdout.write('You typed: ' + cmd);
});
