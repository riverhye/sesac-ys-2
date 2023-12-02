import { useRef } from 'react';

function ScrollBoxRef() {
  const box = useRef();
  const scrollTop = () => {
    // div에 scrollTop이라는 속성 존재
    // .current에 조작할 요소 담김
    box.current.scrollTop = 0;
  };
  return (
    <>
      <div className="scroll-box" ref={box}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </div>
      <button onClick={scrollTop}>TOP</button>
    </>
  );
}

export default ScrollBoxRef;
