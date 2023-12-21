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

io.on('connection', (socket) => {
  console.log('socket id', socket.id);

  // 중복 닉네임 방지
  socket.on('entry', (res) => {
    // 배열 요소 찾기 : includes, indexOf, ...
    if (Object.values(userIdArr).includes(res.userId)) {
      // notice 대신 새로운 이벤트 생성 : error
      // 그래서 result 키를 없애도 됨. (채팅방 내부 메시지 / div에 에러 메세지 보여주기 구분 용도)
      socket.emit('error', { msg: '중복된 닉네임입니다.' });
    } else {
      io.emit('notice', { msg: `${res.userId}님이 입장했습니다.` });
      // but notice는 퇴장할 때도 사용하는 이벤트라서 새로운 이벤트 생성('entrySuccess')
      socket.emit('entrySuccess', { userId: res.userId });
      userIdArr[socket.id] = res.userId;
    }
  });

  socket.on('disconnect', () => {
    io.emit('notice', { msg: `${userIdArr[socket.id]}님이 퇴장했습니다.` });
    delete userIdArr[socket.id];
  });
});

server.listen(PORT, function (req, res) {
  console.log(`Server Open : ${PORT}`);
});
