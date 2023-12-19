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

  // entry에 입력한 닉네임(userIdInput)을 받아와서 전체 공지
  socket.on('entry', (res) => {
    io.emit('notice', { msg: `${res.userId}님이 입장했습니다.` });
  });

  socket.on('disconnect', () => {
    io.emit('notice', { msg: `~~님이 퇴장하셨습니다.` });
  });
});

// userId를 모두 받아와 저장(배열, 객체 등) -> for문과 if문으로 중복 거르기 -> 결과 메세지 전송

server.listen(PORT, function (req, res) {
  console.log(`Server Open : ${PORT}`);
});
