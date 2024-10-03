import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // Correct import for devtools extension
import amountReducer from "./reducers/amountReducer";

// Use composeWithDevTools if available, otherwise fallback to regular applyMiddleware
const composeEnhancers = composeWithDevTools || applyMiddleware;

const store = createStore(
  amountReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
