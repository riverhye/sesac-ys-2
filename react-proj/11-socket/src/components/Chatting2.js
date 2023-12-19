import { useEffect, useState } from 'react';
import '../styles/chat.css';
import Chat from './Chat';
import Notice from './Notice';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000', { autoConnect: false });

export default function Chatting2() {
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
    // {
    //   type: 'notice',
    //   content: '~~님이 입장했습니다.',
    // },
  ]);

  // [ input onChange 저장 & 닉네임 저장 ]
  const [userIdInput, setUserIdInput] = useState('');
  const [userId, setUserId] = useState(null);

  const initSocketConnect = () => {
    // console.log('socket connected', socket.connected);
    if (!socket.connected) socket.connect();
  };

  // 채팅방에 들어갔을 때 initSocketConnect();

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: 'notice', content: res.msg }];

      setChatList(newChatList);
    };

    socket.on('notice', notice);

    return () => socket.off('notice', notice);
  }, [chatList]);

  const sendMsg = () => {};
  const entryChat = () => {
    initSocketConnect();
    socket.emit('entry', { userId: userIdInput });
    setUserId(userIdInput);
  };

  return (
    <>
      <h3>닉네임 입력 받고 입장, 닉네임 중복 방지, 퇴장시키기</h3>

      {userId ? (
        <>
          <div>{userId}님 환영합니다.</div>
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
      ) : (
        <div className="input-container">
          <input
            type="text"
            placeholder="사용할 닉네임을 입력하세요."
            value={userIdInput}
            onChange={(e) => setUserIdInput(e.target.value)}
          />
          <button className="input-button" onClick={entryChat}>
            입장
          </button>
        </div>
      )}
    </>
  );
}
