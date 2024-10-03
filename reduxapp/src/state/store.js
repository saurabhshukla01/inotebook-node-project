import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // For Redux DevTools integration
import thunk from "redux-thunk"; // If you want to use middleware like redux-thunk
import reducers from "./reducers";

// Create the store with middleware and devtools
export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk)) // Applying middleware and DevTools
);
