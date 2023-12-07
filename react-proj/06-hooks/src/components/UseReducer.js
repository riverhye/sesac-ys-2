import { useReducer, useState, useCallback } from 'react';

const initialValue = { value: 0 };

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { value: prevState.value + 1 };
    case 'MINUS':
      return { value: prevState.value - 1 };
    case 'RESET':
      return initialValue;
    case 'MULTIFLY':
      return { value: prevState.value * action.number };
    default:
      return { value: prevState.value };
  }
};

export default function UseReducer() {
  // 1. useState로 하는 경우
  //   const [state, setState] = useState(initialValue);
  //   const plus = () => setState({ value: state.value + 1 });
  //   const minus = () => setState({ value: state.value - 1 });
  //   const reset = () => setState(initialValue);
  // WANT : state 변화 추적 !
  // +, -, 초기화 말고도 더 많은 연산을 사용한다면? setState를 여기저기서 호출하며 컴포넌트가 복잡해진다면?
  // => setState를 검색해서 확인해야 함
  // useReducer는 reducer 함수 하나만으로 파악 가능
  // 즉 state의 복잡한 변화를 추적하려면 코드의 효율성이 좋은 useReducer 사용.

  // 2. useReducer로 바꾸기
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);

  const handleChangeNumber = useCallback((e) => setNumber(e.target.value), []);

  const plus = () => dispatch({ type: 'PLUS' });
  const minus = () => dispatch({ type: 'MINUS' });
  const reset = () => dispatch({ type: 'RESET' });
  const multifly = () => dispatch({ type: 'MULTIFLY', number: number });

  return (
    <>
      <h3>useReducer 공부</h3>
      <div>
        {state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>reset</button>
        <br />
        <input type="number" value={number} onChange={handleChangeNumber} />
        <button onClick={multifly}>곱하기</button>
      </div>
    </>
  );
}
