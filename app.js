const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
app.use(cors);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    credentials: true,
  },

  allowEIO3: true,
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
