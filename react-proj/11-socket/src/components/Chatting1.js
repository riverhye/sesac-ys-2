import { useEffect, useState } from 'react';
import '../styles/chat.css';
import Chat from './Chat';
import Notice from './Notice';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000', { autoConnect: false });

export default function Chatting1() {
  const [msgInput, setMsgInput] = useState('');
  const [chatList, setChatList] = useState([
    {
      type: 'my',
      content: '안녕?',
    },
    {
      type: 'other',
      content: '그래 안녕',
    },
    {
      type: 'notice',
      content: '~~님이 입장했습니다.',
    },
  ]);

  const initSocketConnect = () => {
    console.log('socket connected', socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();
  }, []);

  // 1. state 업데이트 해야 하니까 기존 배열에 새 요소 추가
  // 2. mount될 때가 아닌, chatList가 변경될 때마다 이벤트 발생하도록 변경 (useEffect 분리)
  // 3. 이벤트 누적되어서 등록 후 제거 (return 콜백에 socket.off())
  // ** 여러 번 호출되는 함수 내에 이벤트 넣으면, 호출할 때마다 이벤트가 누적됨 **
  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: 'notice', content: res.msg }];

      setChatList(newChatList);
    };

    socket.on('notice', notice);

    return () => socket.off('notice', notice);
  }, [chatList]);

  const sendMsg = () => {};

  return (
    <>
      <h3>채팅창 UI & socket.id로 입장 공지</h3>
      <div className="chat-container">
        {/* type별로 컴포넌트 분리 */}
        {chatList.map((chat, i) => {
          if (chat.type === 'notice') return <Notice chat={chat} />;
          else return <Chat chat={chat} i={i} />;
        })}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={msgInput}
          onChange={(e) => setMsgInput(e.target.value)}
        />
        <button className="input-button" onClick={sendMsg}>
          전송
        </button>
      </div>
    </>
  );
}
