// const FuncComponent = () => {
//     return <div>FUnctional Component</div>;
// }

import image from './kuromi.jpg';

function FuncComponent() {
  const text = 'hello!';
  const name = 'une';
  const style = { fontSize: '20px', color: 'orange' };

  const ifRenderTest = () => {
    if (name === 'une') {
      return <span>안녕하세</span>;
    } else if (name === 'one') {
      return '안녕하세요!';
    } else {
      return 'hhhhhhhello';
    }
  };

  return (
    <>
      {/* 1. 하나의 태그로 감싸서 return */}
      <div>FUnctional Component</div>

      {/* 2. 변수 사용할 땐 {} */}
      <h3>{text}</h3>

      {/* 2-1. return에 if(x), for(x), 삼항연산자! */}
      <h4>
        {name === 'une' ? (
          <div>
            <h2>hi hi</h2>
          </div>
        ) : (
          <div>
            <h2>who r u !</h2>
          </div>
        )}
      </h4>

      {/* 2-2. 복잡한 조건? 함수로 만들어 사용! */}
      <h4>{ifRenderTest()}</h4>

      {/* 2-3. 조건1이 참이어야 조건2를 읽는 &&(case. else 값 비울 때) */}
      <h5>{name === 'une' && '논리곱'}</h5>

      {/* 3. inline style : style 속성값으로 객체(<-JS 문법) 전달 */}
      <div style={{ fontSize: '20px', color: 'orange' }}>HYE LLO</div>
      <div style={style}>HYE LLO</div>

      {/* 4. class와 onclick을 JSX에서는? */}
      {/* html에서는 class="" BUT jsx에선 className="" */}
      <div className="test-css">jsx에서 css 사용(className)</div>

      {/* html에서는 함수를 "호출" BUT jsx에서는 함수를 "선언" */}
      {/* WHY? 저장할 때마다 자동으로 리렌더링하기 때문에 함수 호출하면 이벤트 발생 이전에 바로 실행됨 */}
      <button
        onClick={() => {
          console.log('함수 선언');
        }}
      >
        클릭 이벤트
      </button>

      {/* 5. 닫는 태그 필수 */}
      <br />

      {/* 6. 이미지 사용 : public or src 내부 */}
      {/* / : public 폴더부터 시작 */}
      <img src="/kuromi.jpg" />

      {/* src 폴더 내부 이미지 사용 : 이미지 import해서 넣기 */}
      <img src={image} />
    </>
  );
}

export default FuncComponent;
