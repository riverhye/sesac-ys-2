import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// as : type 단언
// ts 컴파일러는 .createRoot에 null이나 undefined가 할당될 수 있다고 해석
// BUT #root가 존재한다고 확신할 수 있는 상황 (index.html)
// 그래서 HTMLElement임을 as 키워드로 단언하여 에러가 발생하지 않도록 함.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
