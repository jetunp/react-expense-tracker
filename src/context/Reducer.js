//Reducer fn is basically how we specify the app state changes in response to certain actions to our context
//instead of useState we use useReducer as when a state is event triggered many times for diff actions to be 
// performed it gets complex and better to use reducer fn.
const Reducer = (state,action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
         case 'ADD_TRANSACTION':
            return {
                ...state, 
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    }
    

}
export default Reducer;