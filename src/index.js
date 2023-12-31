import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
);
