import { useReducer } from 'react';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const RESET = 'counter/RESET';

export default function Counter() {
  const initialValue = { value: 0 };

  const reducer = (prevState, action) => {
    switch (action.type) {
      case INCREASE:
        return { value: prevState.value + 1 };
      case DECREASE:
        return { value: prevState.value - 1 };
      case RESET:
        return initialValue;
      default:
        return { value: prevState.value };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const increase = () => dispatch({ type: INCREASE });
  const decrease = () => dispatch({ type: DECREASE });
  const reset = () => dispatch({ type: RESET });

  return (
    <>
      <div>
        <h2>{state.value}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  );
}
