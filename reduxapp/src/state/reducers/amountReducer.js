// src/state/reducers/amountReducer.js
const initialState = {
    amount: 0,
  };
  
  const amountReducer = (state = initialState, action) => {
    switch (action.type) {
      case "deposit":
        return {
          ...state,
          amount: state.amount + action.payload,
        };
      case "withdraw":
        return {
          ...state,
          amount: state.amount - action.payload,
        };
      default:
        return state;
    }
  };
  
  export default amountReducer;
  