import { useState } from 'react';

export default function Todo() {
  const [inputText, setInputText] = useState([]);

  return (
    <div>
      <h1>To Do!</h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(...inputText, e.target.value)}
        />
        <button>ADD</button>
      </div>
      {inputText
        ? inputText.map((value) => (
            <li>
              {value}
              <button>DONE</button>
            </li>
          ))
        : ''}
      {/* 만약 inputText가 null이 아니라면? li에 map 돌려서 보여주고, 아니라면 '' */}
    </div>
  );
}
