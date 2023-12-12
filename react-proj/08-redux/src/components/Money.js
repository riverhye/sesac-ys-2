import { useState } from 'react';

export default function Money({ money, moneyDeposit, moneyWithdraw }) {
  const [input, setInput] = useState(null);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h3>잔액 : {money}원</h3>
      <input
        type="number"
        placeholder="금액을 입력해 주세요."
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={() => moneyDeposit(input)}>입금</button>
      <button onClick={() => moneyWithdraw(input)}>출금</button>
    </>
  );
}
