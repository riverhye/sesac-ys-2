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
  ]);

  const [userIdInput, setUserIdInput] = useState('');
  const [userId, setUserId] = useState(null);

  const [failMsg, setFailMsg] = useState('');

  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  // error 이벤트 받아서 메시지 보여주기
  useEffect(() => {
    socket.on('error', (res) => {
      setFailMsg(res.msg);
    });

    // 브라우저 나감 = 퇴장 -> UI적으로 표현하기 위해 notice로 퇴장 메세지 전송
    // -> notice에서 바로 setUserId 하면 안 됨(퇴장한 유저의 것을 넣는 거니까)
    // 그래서 성공했을 때의 이벤트를 새로 생성해 줌
    socket.on('entrySuccess', (res) => {
      setUserId(res.userId);
    });
  }, []);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: 'notice', content: res.msg }];
      setChatList(newChatList);
    };

    socket.on('notice', notice);

    return () => socket.off('notice', notice);
  }, [chatList, userIdInput]);

  const sendMsg = () => {};

  const entryChat = () => {
    initSocketConnect();
    socket.emit('entry', { userId: userIdInput });
  };

  return (
    <div className="wrapper-container">
      {userId ? (
        <>
          <div className="greeting">Hello, {userId}!</div>
          <div className="chat-wrapper">
            <div className="chat-container">
              {chatList.map((chat, i) => {
                if (chat.type === 'notice') return <Notice chat={chat} />;
                else return <Chat chat={chat} i={i} />;
              })}
            </div>
            <div className="input-container">
              <input
                type="text"
                value={msgInput}
                placeholder="메시지를 입력하세요."
                onChange={(e) => setMsgInput(e.target.value)}
              />
              <button className="input-button" onClick={sendMsg}>
                ✉︀
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="entry-container">
          <ul>
            <li>✅ 닉네임 입력 후 입장</li>
            <li>✅ 닉네임 중복 방지</li>
            <li>✅ 퇴장시키기</li>
          </ul>
          <div className="input-wrapper">
            <div className="input-container">
              <input
                type="text"
                placeholder="사용할 닉네임을 입력하세요."
                value={userIdInput}
                onChange={(e) => setUserIdInput(e.target.value)}
              />
              <button className="input-button" onClick={entryChat}>
                🖐️
              </button>
            </div>
            <div>{failMsg}</div>
          </div>
        </div>
      )}
    </div>
  );
}
