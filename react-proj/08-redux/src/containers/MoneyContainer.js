import { useDispatch, useSelector } from 'react-redux';
import Money from '../components/Money';
import { deposit, withdraw } from '../store/moneyReducer';

export function MoneyContainer() {
  // money state가 어딨지..?
  const money = useSelector((state) => state.money);

  const dispatch = useDispatch();
  const moneyDeposit = (amount) => dispatch(deposit(amount));
  const moneyWithdraw = (amount) => dispatch(withdraw(amount));

  return (
    <Money
      money={money}
      moneyDeposit={moneyDeposit}
      moneyWithdraw={moneyWithdraw}
    />
  );
}
