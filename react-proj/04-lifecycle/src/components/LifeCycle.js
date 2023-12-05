import { useEffect, useState } from 'react';

function LifeCycle(props) {
  const { number } = props;
  const [text, setText] = useState('');

  // useEffect: 함수. 첫번째 매개변수는 "콜백함수", 두번째 매개변수는 "의존성 배열".
  // 기본적으로 mount 될 때 콜백함수 실행

  // 1. 의존성 배열이 빈 배열 -> mount될 때 콜백함수 실행
  // 콜백 함수의 return 다음 함수를 unmount 시 실행
  useEffect(() => {
    console.log('function component : 🔆 mount');

    return () => {
      console.log('function component : 🆗 unmount');
    };
  }, []);

  // 2. 의존성 배열 없음! -> mount & update할 때 콜백함수 실행
  useEffect(() => {
    console.log('function component : 🔆✅ update');
  });

  // 3. 의존성 배열에 원소가 존재 -> "해당 원소"가 update할 때 콜백함수 실행
  // 물론 mount 될 때에도 실행
  useEffect(() => {
    console.log('function component : ✅✅ text update');
  }, [text]);

  return (
    <>
      <h2>함수형 컴포넌트 LifeCycle 공부</h2>
      <div>number: {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default LifeCycle;
