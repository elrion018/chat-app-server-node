const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.all('/*', function (request, response, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

server.listen(3000, function () {
  console.log('socket.io');
});
