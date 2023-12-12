// Ver.3 : 파일 분리
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from './store/counterReducer';
import { decrease } from './store/counterReducer';

function AppRedux2() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number : {number}</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="box">
      <Box4 />
    </div>
  );
}

// state를 객체로 만들었기 때문에(counterReducer.js 참조) 객체를 한 번 더 타고 들어감
function Box4() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);

  const dispatch = useDispatch();

  return (
    <div className="box">
      <h3>number : {number}</h3>
      {/* <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button> */}
      {/* <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button> */}
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <div>isData : {`${isData}`}</div>
      <button onClick={() => dispatch({ type: 'CHANGE' })}>변경</button>
    </div>
  );
}

export default AppRedux2;
