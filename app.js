const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.all('/*', function (request, response, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/', function (req, res) {
  res.sendFile('start chatt app server');
});

io.on('connection', function (socket) {
  socket.on('chat', function (data) {
    let returnMessage = {
      message: data.message,
    };

    socket.broadcast.emit('chat', returnMessage);
  });
});

server.listen(3000, function () {
  console.log('socket.io');
});
