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
    let isDuplicate = false;

    // 객체 마지막 요소로 추가?
    // 객체의 키가 변수일 때 순회하면서 할당하는 걸 모르겠네..
    for (userId in userIdArr) {
      if (userid !== res.userId) {
        userid = res.userId;
      }
    }

    // 변수 자체를 key로 넣기 위해 대괄호 표기법 사용
    for (const key in userIdArr) {
      if (key[socket.id] !== res.userId) {
        key[socket.id] = res.userId;

        // entry에 입력한 닉네임(userIdInput)을 받아와서 전체 공지
        io.emit('notice', {
          result: true,
          msg: `${res.userId}님이 입장했습니다.`,
        });
      } else if (key === socket.id) {
        isDuplicate = true;
        socket.emit('notice', { result: false, msg: '중복된 닉네임입니다.' });
      }
    }

    if (!isDuplicate) {
      userIdArr[socket.id] = res.userId;
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
