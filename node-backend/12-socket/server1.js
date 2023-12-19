const http = require('http');
const express = require('express');
const app = express();
// http 모듈을 이용해 app 객체로 하나의 서버를 만듦
// WHY? 소켓은 http 모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8080;

// const Socket = require('socket.io'); // 소켓 만들 수 있는 함수 불러와서
// const io = Socket(server) // 서버를 인자로 넘겨 소켓 객체 생성
const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('client1');
});

// 클라이언트로부터 연결 받을 수 있도록 이벤트 등록
// io.on('connection', (socket) => {
//   // 콜백함수의 매개변수(socket 객체) : 접속한 클라이언트의 소켓
//   console.log('socket id', socket.id);

//   // on : 클라이언트에서 보내준 데이터(socket.emit)를 받을 이벤트 등록
//   // 클라이언트에서 emit으로 보낼 때 이벤트 발생
//   socket.on('hello', (res) => {
//     // res : 클라이언트에서 소켓으로 보내준 데이터
//     console.log('res', res);
//     socket.emit('bye', { msg: '안녕히 가세요!' });
//   });

//   // 전체 클라이언트에게 데이터 전송(ex. 채팅방 입장 시 전체 공지)
//   socket.on('entry', () => {
//     // 서버에서 io 사용하면 전체 클라이언트를 대상!
//     io.emit('notice', { msg: `${socket.id}님이 입장했습니다.` });
//   });
// });

io.on('connection', (socket) => {
  socket.on('hi', (res) => {
    console.log(res.msg);
    socket.emit('hi result', { name: 'hi', msg: '안녕' });
  });

  socket.on('study', (res) => {
    console.log(res.msg);
    socket.emit('study result', { name: 'study', msg: '공부하자' });
  });

  socket.on('bye', (res) => {
    console.log(res.msg);
    socket.emit('bye result', { name: 'bye', msg: '잘가' });
  });
});

// 서버를 여는 listen은 server로
server.listen(PORT, function (req, res) {
  console.log(`Server Open : ${PORT}`);
});
