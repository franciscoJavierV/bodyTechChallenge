import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./pages/App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import thunk from "redux-thunk";

//pages
const state =
  {
    song: "",
    selectedSong: "",
  } || {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  state,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>{" "}
  </Provider>,
  document.getElementById("root")
);
// expose store when run in Cypress
if (window.Cypress) {
  window.store = store;
}
