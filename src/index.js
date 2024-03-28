import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./assets/css/app.scss";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css';
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer style={{ zIndex: 10000000000000 }} />
      <App />
    </Provider>
  </React.StrictMode>
);
