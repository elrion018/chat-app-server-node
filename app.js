const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
