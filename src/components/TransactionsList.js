import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Transaction from "./Transaction";

const TransactionsList = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <>
       <h3>History</h3>
      <ul className="list">
        {/* transactions is an array of objects coming from global context and we need to loop through each objects to display them*/}
        {/* When we have a list like below , we need an unique key to know which transaction we are dealing with at a time*/}
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul> 
    </>
  )
}

export default TransactionsList