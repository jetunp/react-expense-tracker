import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  //first get the array of the amounts of each transactions
  const amounts =  transactions.map((transaction) => transaction.amount)
  //then accumulate amount from each transaction into one.
  const totalBalance = amounts.reduce((total,eachAmount)=>(total+=eachAmount),0).toFixed(2);
  return (
    <>
        <h4> YOUR BALANCE </h4>
        <h1>${totalBalance}</h1>
    </>
  )
}

export default Balance