import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext);
  //first get the array of the amounts of each transactions
  const amounts =  transactions.map((transaction) => transaction.amount)
  //The positive amounts will add up to income
  const income = amounts
  .filter(amount => amount > 0)
  .reduce((total, eachIncomeAmount) => (total+=eachIncomeAmount),0)
  .toFixed(2);
  //The negative amounts will add up to expense
  const expense = (amounts
  .filter(amount => amount < 0)
  .reduce((total, eachIncomeAmount) => (total+=eachIncomeAmount),0) * -1)
  .toFixed(2);
  
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpense