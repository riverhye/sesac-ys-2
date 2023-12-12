// action type 정의
export const ADD = 'todo/ADD';
export const TOGGLE = 'todo/TOGGLE';

// action 생성자 함수 정의
export const addTodos = () => {};
export const toggleTodos = () => {};

// reducer 정의
const initialValue = { todos: [] };
const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD:
    case TOGGLE:
    default:
      return state;
  }
};

export default todoReducer;
