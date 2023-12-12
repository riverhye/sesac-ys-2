import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
// 함수는 export default 할 수 있다
// 변수는 export const 변수명 = ~~ 하거나 하단에 export default 변수명
