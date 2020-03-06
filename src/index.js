import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  QuotesContainer,
  randomQuotesReducer
} from './QuotesApp/QuotesContainer';

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(randomQuotesReducer);

ReactDOM.render(
  <Provider store={store}>
    <QuotesContainer />
  </Provider>,
  document.getElementById("root")
);
