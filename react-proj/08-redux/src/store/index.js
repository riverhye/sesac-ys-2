// 여러 개의 reducer를 combine
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isDataReducer from './isDatatReducer';
import moneyReducer from './moneyReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  isData: isDataReducer,
  money: moneyReducer,
});

export default rootReducer;
