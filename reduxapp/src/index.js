// src/index.js

import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import { Provider } from "react-redux";
import store from "./state/store";
import App from "./App";

// Use createRoot for React 18 compatibility
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
