const readlineSync = require('readline-sync');
const passwordGenerator = require('password-generator');

let name = readlineSync.question('What is your name?: ');
console.log(name);

let password = passwordGenerator();
console.log(password);

const markdown = require( "markdown" ).markdown;
console.log( markdown.toHTML( "Hello *World*!" ) );

const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
});
server.listen(3000);