import { useState } from 'react';

export default function Money({ money, moneyDeposit, moneyWithdraw }) {
  const [input, setInput] = useState('');

  const plus = () => {
    moneyDeposit(Number(input));
    setInput('');
  };

  const minus = () => {
    moneyWithdraw(Number(input));
    setInput('');
  };

  return (
    <>
      <h3>잔액: {money}원</h3>
      <input
        type="number"
        placeholder="금액을 입력해 주세요."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => plus()}>입금</button>
      <button onClick={() => minus()}>출금</button>
    </>
  );
}
