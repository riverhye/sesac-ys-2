const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 8000;

const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('client2');
});

io.on('connection', (socket) => {
  socket.on('hello', (res) => {
    console.log(res);
    socket.emit('hello result', { name: res.msg, msg: '안녕' });
  });

  socket.on('study', (res) => {
    console.log(res);
    socket.emit('study result', { name: res.msg, msg: '공부하자' });
  });

  socket.on('bye', (res) => {
    console.log(res);
    socket.emit('bye result', { name: res.msg, msg: '잘가' });
  });
});

server.listen(PORT, function (req, res) {
  console.log(`Server Open : ${PORT}`);
});
