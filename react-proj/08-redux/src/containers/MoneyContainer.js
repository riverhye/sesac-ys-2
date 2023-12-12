import { useDispatch, useSelector } from 'react-redux';
import Money from '../components/Money';
import { deposit, withdraw } from '../store/moneyReducer';

export const MoneyContainer = () => {
  const money = useSelector((state) => state.money);
  const dispatch = useDispatch();

  const moneyDeposit = (payload) => {
    dispatch({ ...deposit(), payload: payload });
  };
  const moneyWithdraw = (payload) => {
    dispatch({ ...withdraw(), payload: payload });
  };

  return (
    <Money
      money={money}
      moneyDeposit={moneyDeposit}
      moneyWithdraw={moneyWithdraw}
    />
  );
};
