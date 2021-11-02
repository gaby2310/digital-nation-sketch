const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(3000);
const io = socket(server);

app.use(express.static('public'));

const newConnection = (socket) => {
  const mouseMsg = (data) => {
    socket.broadcast.emit('mouse', data);
    // io.sockets.emit('mouse', data);
  };
  socket.on('mouse', mouseMsg);
};

io.sockets.on('connection', newConnection);
