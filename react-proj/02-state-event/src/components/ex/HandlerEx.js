import { Component, useState } from 'react';
import ColorSelect from './ColorSelect';

function HandlerEx() {
  const [fruitImg, setFruitImg] = useState('apple');
  const [input, setInput] = useState('');
  const [bgColor, setBgColor] = useState('black');
  const [color, setColor] = useState('black');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <label>과일 : </label>
        <select onChange={(e) => setFruitImg(e.target.value)}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="peach">복숭아</option>
          <option value="orange">오렌지</option>
        </select>
        <ColorSelect mode="배경" onChange={(e) => setBgColor(e.target.value)} />
        <ColorSelect mode="글자" onChange={(e) => setColor(e.target.value)} />
        <br />
        <label>내용 : </label>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>

      <div style={{ width: '300px', height: '300px' }}>
        <img src={`/img/${fruitImg}.jpg`} />
      </div>
      <div style={{ backgroundColor: bgColor, color: color }}>{input}</div>
    </div>
  );
}

// 변수랑 문자 같이 : {`${}`}

// function HandlerEx() {
//   const [msg, setMsg] = useState('사라져라');
//   const [greeting, setGreeting] = useState('안녕하세요');

//   return (
//     <>
//       <button
//         onClick={() => {
//           setMsg('보여라');
//           setGreeting('');
//         }}
//       >
//         {msg}
//       </button>
//       <h1>{greeting}</h1>
//     </>
//   );
// }

// function HandlerEx() {
//   const [color, setColor] = useState('black');
//   return (
//     <>
//       <h1 style={{ color: color }}>검정색 글씨</h1>
//       <div>
//         <button
//           onClick={() => {
//             setColor('red');
//           }}
//         >
//           빨간색
//         </button>
//         <button
//           onClick={() => {
//             setColor('blue');
//           }}
//         >
//           파란색
//         </button>
//       </div>
//     </>
//   );
// }

// class HandlerEx extends Component {
//   constructor() {
//     super();
//     this.state = {
//       greeting: 'Hello World!',
//     };
//     this.handleGreeting = this.handleGreeting.bind(this);
//   }

//   handleGreeting = () => this.setState({ greeting: 'Goodbye World!' });

//   render() {
//     return (
//       <>
//         <h1>{this.state.greeting}</h1>
//         <button onClick={this.handleGreeting}>클릭</button>
//       </>
//     );
//   }
// }

export default HandlerEx;
