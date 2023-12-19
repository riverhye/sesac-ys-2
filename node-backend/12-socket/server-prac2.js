const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 8000;

const cors = require('cors');
app.use(cors());

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    // method: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('socket id', socket.id);
  io.emit('notice', { msg: `${socket.id}님이 입장했습니다.` });
});

server.listen(PORT, function (req, res) {
  console.log(`Server Open : ${PORT}`);
});
