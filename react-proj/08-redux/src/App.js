import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  const [number, setNumber] = useState(100);
  const increase = () => setNumber(number + 1);
  const decrease = () => setNumber(number - 1);

  return (
    <div className="box">
      <h3>number : {number}</h3>
      <Box2 number={number} increase={increase} decrease={decrease} />
    </div>
  );
}

function Box2(props) {
  return (
    <div className="box">
      <h3>number : {props.number}</h3>
      <Box3
        number={props.number}
        increase={props.increase}
        decrease={props.decrease}
      />
    </div>
  );
}

function Box3(props) {
  return (
    <div className="box">
      <Box4
        number={props.number}
        increase={props.increase}
        decrease={props.decrease}
      />
    </div>
  );
}

function Box4(props) {
  return (
    <div className="box">
      <h3>number : {props.number}</h3>
      <button onClick={props.increase}>+</button>
      <button onClick={props.decrease}>-</button>
    </div>
  );
}

export default App;
