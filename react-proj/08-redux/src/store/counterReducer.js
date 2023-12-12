const INCREMENT = 'counter/INCREMENT'; // reducer type 중복 방지로 counter/ 접두어
const DECREMENT = 'counter/DECREMENT';

// 발생할 수 있는 action을 return하는 함수
// WHY ? 액션 type의 이름이 바뀌면, 액션을 발생시키는 모든 곳(dispatch 사용한 부분)에서
// action.type을 다 바꾸어야 함
// 하지만 type을 상수에 담아 함수로 만들면 상수 값(ex. counter/INCREMENT)만 변경하면 됨.
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

const initialValue = { number: 100 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'INCREMENT': // 상수 선언 전 (Ver.3)
    case INCREMENT: // 상수 선언 후 (Ver.3-1)
      return { number: state.number + 1 };
    case 'DECREMENT':
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
