import { useState, useMemo } from 'react';

export default function ComputeExpensive() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const computeExpensiveValue = (count) => {
    for (let i = 0; i < 100000; i++) {}

    return count ** 2;
  };

  // not useMemo
  const expensiveValue = computeExpensiveValue(count);

  // useMemo
  // const expensiveValue = useMemo(()=>computeExpensiveValue(count),[count]);

  return (
    <>
      <p>임의의 큰 연산 결과: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setOtherState(otherState + 1)}>other+1</button>
    </>
  );
}
