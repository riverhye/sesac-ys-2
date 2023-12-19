import io from 'socket.io-client';
import { useEffect, useRef } from 'react';

// 백 서버와 연결하되 자동 연결 X
const socket = io.connect('http://localhost:8000', { autoConnect: false });

export default function Prac1() {
  // mount될 때 한번만 socket 연결
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    // socket 연결 이후 받아오기
    socket.on('resHello', (res) => {
      // console.log(res);
      resultMsg(res);
    });

    socket.on('resStudy', (res) => {
      resultMsg(res);
    });

    socket.on('resBye', (res) => {
      resultMsg(res);
    });
  }, []);

  const resultMsg = (res) => {
    result.current.innerText = res.msg;
  };

  const hello = () => {
    socket.emit('hello', { msg: 'hello' });
  };
  const study = () => {
    socket.emit('study', { msg: 'study' });
  };
  const bye = () => {
    socket.emit('bye', { msg: 'bye' });
  };

  const result = useRef(null);

  return (
    <>
      <h3>소켓 실습 1</h3>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
      <p ref={result}></p>
      {/* <div className="room-container">
        <div className="room-background"></div>
        <div className="room-msg">
          <input type="text" placeholder="메시지를 입력하세요." />
          <button>전송</button>
        </div>
      </div> */}
    </>
  );
}
