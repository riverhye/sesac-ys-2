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

let userIdArr = {};
// userIdArr[socket.id] = '안녕' -> 'socket.id': '안녕'
// {"socket.id": "userId", "socket.id": "userId"}

io.on('connection', (socket) => {
  console.log('socket id', socket.id);

  socket.on('entry', (res) => {
    if (Object.keys(userIdArr).find((key) => userIdArr[key] !== res.userId)) {
      // 아님 : userIdArr에 지금 거 추가하고 전체 공지
      io.emit('notice', {
        result: true,
        msg: `${res.userId}님이 입장했습니다.`,
      });
    } else {
      // 중복 : fail 메세지
      socket.emit('notice', { result: false, msg: '중복된 닉네임입니다.' });
    }
  });

  console.log(userIdArr);

  // 위에서 닉네임의 userId를 socket.id로 넣어놔서, 해당 유저를 지움
  socket.on('disconnect', () => {
    io.emit('notice', { msg: `${userIdArr[socket.id]}님이 퇴장했습니다.` });
    delete userIdArr[socket.id];
  });
});

// userId를 모두 받아와 저장(배열, 객체 등) -> for문과 if문으로 중복 거르기 -> 결과 메세지 전송

server.listen(PORT, function (req, res) {
  console.log(`Server Open : ${PORT}`);
});
