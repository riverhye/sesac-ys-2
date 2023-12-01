import { Component, useState } from 'react';

function HandlerEx() {
  const [fruitImg, setFruitImg] = useState('apple');
  const [bgColor, setBgColor] = useState('');
  const [color, setColor] = useState('black');
  const [input, setInput] = useState('');

  function handleBgColor(e) {
    setBgColor(e.target.value);
  }

  function handleColor(e) {
    setColor(e.target.value);
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <form>
        <label for="fruits">과일 : </label>
        <select
          name="fruits"
          onChange={(e) => setFruitImg(e.target.value)}
          id="fruits"
        >
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="peach">복숭아</option>
          <option value="orange">오렌지</option>
        </select>

        <label for="bgcolors">배경색 : </label>
        <select name="bgcolors" onChange={handleBgColor} id="bgcolors">
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>

        <label for="colors">글자색 : </label>
        <select name="colors" onChange={handleColor} id="colors">
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
        <br />
        <input type="text" onChange={handleInput} />
      </form>

      <div style={{ width: '300px', height: '300px' }}>
        <img src={`/img/${fruitImg}.jpg`} />
      </div>
      <div style={{ backgroundColor: bgColor, color: color }}>{input}</div>
    </>
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
