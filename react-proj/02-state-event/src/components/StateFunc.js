import { useState } from 'react';

function StateFunc() {
  // const [state 변수, state 변경함수] = useState(초기값)
  // 이를 구조 분해해서 number, setNumber 선언한 것
  const [number, setNumber] = useState(0);
  const [text] = useState('hello');

  return (
    <>
      <h3>함수형 컴포넌트 state 공부</h3>
      <div>
        number state value {number}
        <button
          onClick={() => {
            // 이렇게는 +2가 안 된다
            // setNumber(number + 1);
            // setNumber(number + 1);

            setNumber((prevNumber) => prevNumber + 1);
            setNumber((prevNumber) => prevNumber + 1);
          }}
        >
          +2
        </button>
        <div>{text}</div>
      </div>
    </>
  );
}

export default StateFunc;
