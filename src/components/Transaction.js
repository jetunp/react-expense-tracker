import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const amountSign = transaction.amount > 0 ? '+' : '-';
    return (
        <>
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text}<span>{amountSign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)}className="delete-btn">x</button>
        </li> 
        </>
    )
}

export default Transaction