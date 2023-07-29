import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

//Initial state: The value you want the state to be initally, this arg is ignored after initial render
const initalState = {
    transactions: []
}

//Create global context that lets you pass info deep down to other components
export const GlobalContext = createContext(initalState)

// in order for other comp to have access to our global state we need a provider
// Provider component
export const GlobalProvider = ({children}) => {
     
    //when we want to call a action defined in reducer fn we call dispatch 
    const [state,dispatch] = useReducer(Reducer, initalState);

    //Actions that are gonna make call to our reducer
    //In order to use these actions we have to pass it down in our provider
    const deleteTransaction = async(id) => {
        dispatch({
            type:'DELETE_TRANSACTION',
            //payload is basically any data we want to send with our action
            payload: id
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type:'ADD_TRANSACTION',
            //payload is basically any data we want to send with our action
            payload: transaction
        })
    }

      // Store the character data on the server
  useEffect(() => {
    if (state.length) {
      const saveTransactions = async() => {
      try {
        const res = await fetch(
          "https://recruiting.verylongdomaintotestwith.ca/api/%7Bjetunp%7D/character",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
          }
        );
        const data = await res.json()
        console.log("Transaction data saved:", data);
      } catch (error) {
        console.error("Failed to save transaction data:", error);
      }

    }
    saveTransactions();
  }
  }, [state]);

    //value takes transactions as parameter and the way we can access anything in transactions is using (state.)
    //that way we can access transactions state from any component using useContext
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>) 
}