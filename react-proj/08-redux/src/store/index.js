// 여러 개의 reducer를 combine
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isDataReducer from './isDatatReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  isData: isDataReducer,
});

export default rootReducer;
