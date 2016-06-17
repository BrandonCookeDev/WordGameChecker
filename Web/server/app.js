var connect = require('connect');
var serveStatic = require('serve-static');
var clientDir = __dirname + '\\..\\client';
console.log(clientDir)
connect().use(serveStatic(clientDir)).listen(1337, function(){
    console.log('Server running on 1337...');
});