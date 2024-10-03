import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount:amountReducer,  // Maps the amountReducer to state.amount
})

export default reducers;


