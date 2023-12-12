// Ver.1 : 기존 코드 (props drilling 예시)
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

// Ver.2 : Redux 적용
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux1 from './AppRedux1';

// // Provider 컴포넌트를 react-redux에서 불러오기
// import { Provider } from 'react-redux';
// // store 만들 때 필요한 함수
// import { configureStore } from '@reduxjs/toolkit';
// // 없어도 영향 없긴 함!
// import { composeWithDevTools } from 'redux-devtools-extension';

// const initialValue = { number: 100 };
// const reducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { number: state.number + 1 };
//     case 'DECREMENT':
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };

// const store = configureStore({ reducer: reducer }, composeWithDevTools());

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <AppRedux1 />
//   </Provider>
// );

// Ver.3 : Redux 구조화 (src/store)
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux2 from './AppRedux2';

// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';

// // reducer 부분을 src/store 안에 분리
// import rootReducer from './store'; // node 환경에서 폴더 적으면 기본적으로 index 파일 찾아감

// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <AppRedux2 />
//   </Provider>
// );

// Ver.4 : Redux 구조화 + containers 컴포넌트 폴더 / presentational 컴포넌트 폴더 분리
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux3 from './AppRedux3';

// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';

// // reducer 부분을 src/store 안에 분리
// import rootReducer from './store'; // node 환경에서 폴더 적으면 기본적으로 index 파일 찾아감

// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <AppRedux3 />
//   </Provider>
// );

// Practice
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PracRedux from './PracRedux';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import moneyReducer from './store';

const store = configureStore({ reducer: moneyReducer });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PracRedux />
  </Provider>
);
