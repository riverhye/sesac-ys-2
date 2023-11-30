import { useState } from 'react';

function EventFunc() {
  const [msg, setMsg] = useState('hello');
  const [name, setName] = useState('');

  const handleOnClick = (e) => {
    console.log(e.target);
    setMsg('Bye');
  };

  function handleOnClickHello() {
    setMsg('HeLLO!');
  }

  const handleOnClickTest = (msg) => {
    setMsg(msg);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') console.log('엔터를 눌렀습니다!');
  };

  return (
    <>
      <h3>함수형 컴포넌트 event handling 공부</h3>
      <div>
        {msg}
        <button onClick={handleOnClick}>ByeBye</button>
        <button onClick={handleOnClickHello}>Hello</button>

        {/* 함수 매개변수 받고 싶을 때 */}
        {/* 방법 1. onClick에 익명함수를 선언하고, 그 내부에서 함수 실행(매개변수 전달) */}
        {/* <button onClick={()=>{handleOnClickTest('안녕?')}}>Test</button> */}

        {/* 방법 2. bind 이용 */}
        {/* bind : 함수의 메서드. 첫번째 인자로 함수의 this 설정~! */}
        {/* 그래서 두번째 인자부터 순차적으로 매개변수로 전달됨 */}
        <button onClick={handleOnClickTest.bind(null, '안녕?')}>테스트</button>
      </div>

      <div>
        {/* input 태그에서 엔터를 누르면 "엔터를 눌렀습니다!" 라는 문구가 콘솔에 찍히게 */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyUp={handleEnter}
        />
      </div>
    </>
  );
}

export default EventFunc;
