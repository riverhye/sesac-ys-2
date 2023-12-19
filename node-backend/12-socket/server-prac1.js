const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 8000;

// 프론트는 리액트라서 ejs, app.get("/") 모두 사용할 필요 X
// 대신 CORS 이슈(cross 이슈) 해결
// CORS 이슈 : 다른 서버에서 보내는 요청 제한
// => 요청 허용하려면? npm i cors -> 소켓 옵션에 추가
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

  socket.on('hello', (res) => {
    // console.log(res);
    socket.emit('resHello', { msg: '안녕하세요~' });
  });

  socket.on('study', (res) => {
    socket.emit('resStudy', { msg: '공부하자' });
  });

  socket.on('bye', (res) => {
    socket.emit('resBye', { msg: '잘 가세요' });
  });
});

server.listen(PORT, function (req, res) {
  console.log(`Server Open : ${PORT}`);
});
