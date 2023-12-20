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

  const [failMsg, setFailMsg] = useState('');

  const initSocketConnect = () => {
    // console.log('socket connected', socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    const notice = (res) => {
      if (res.result) {
        const newChatList = [...chatList, { type: 'notice', content: res.msg }];

        setChatList(newChatList);
        setUserId(userIdInput);
      } else {
        setFailMsg(res.msg);
      }
    };

    socket.on('notice', notice);

    return () => socket.off('notice', notice);
  }, [chatList, userIdInput]);

  const sendMsg = () => {};

  const entryChat = () => {
    // 소켓 연결, userId 전달
    // -> userIdArr 안에 res.userId가 있는지 확인 {socket.id: 닉넴1, socket.id: 닉넴2, ...} & 결과값 전달
    // -> 결과 받아서 각각 처리 (근데 이게 notice로 오니까 이부분은 entryChat이 아니지 않나?
    initSocketConnect();
    socket.emit('entry', { userId: userIdInput });
    // 아! 여기서 setUserId를 바꿔줘야 화면 전환이 되겠구나..??
    // setUserId(userIdInput);
  };

  return (
    <div className="wrapper-container">
      {userId ? (
        <>
          <div className="greeting">Hello, {userId}!</div>
          <div className="chat-wrapper">
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
          {/* result가 제대로 안 되면..? */}
          <div>{failMsg}</div>
        </div>
      )}
    </div>
  );
}
