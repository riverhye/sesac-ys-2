const DEPOSIT = 'MONEY/DEPOSIT';
const WITHDRAW = 'MONEY/WITHDRAW';

export const deposit = (amount) => ({ type: DEPOSIT, payload: amount });
export const withdraw = (amount) => ({ type: WITHDRAW, payload: amount });

const initialValue = 0;

const moneyReducer = (state = initialValue, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload; // + onChange의 e.target.value
    case WITHDRAW:
      return state - action.payload; // - onChange의 e.target.value
    default:
      return state;
  }
};

export default moneyReducer;
