const DEPOSIT = 'money/DEPOSIT';
const WITHDRAW = 'money/WITHDRAW';

export const deposit = (payload) => ({ type: DEPOSIT, payload });
export const withdraw = (payload) => ({ type: WITHDRAW, payload });

const initialValue = 0;

const moneyReducer = (state = initialValue, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

export default moneyReducer;
