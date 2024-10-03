// src/store.js

import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// Create the store with the root reducer
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For Redux DevTools
);
